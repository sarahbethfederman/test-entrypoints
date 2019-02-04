import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'fast-glob';
import { match } from 'minimatch';
import { danger, fail, warn } from 'danger';

function getWorkspaceDirectories(): string[] {
  const manifest = require('./package.json');
  const paths = glob.sync<string>(manifest.workspaces.map((pattern) => `${__dirname}/${pattern}/package.json`));
  return paths.filter((p) => !Boolean(require(p).private)).map((p) => path.relative('.', path.dirname(p)));
}

function getVersionsFromChangelog(workspaceDirectory): string[] {
  if (!fs.existsSync(`./${workspaceDirectory}/CHANGELOG.md`)) {
    return [];
  }
  const changeLogFile = fs.readFileSync(`./${workspaceDirectory}/CHANGELOG.md`).toString();

  // Regex to match semver patterns d.d.d where d is any valid whole number >= 0
  const SEMVER_MATCH = /((\d+\.)(\d+\.)(\d+))/gm; // this will need revising when we formalize the CHANGELOG format/style.
  const versions = changeLogFile.match(SEMVER_MATCH);
  return versions || [];
}

function getVersionFromManifest(workspaceDirectory): string {
  const path = `./${workspaceDirectory}/package.json`;
  if (!fs.existsSync(path)) {
    return '';
  }
  const version = require(path).version;

  return version || '';
}

function wereFilesInWorkspaceCreatedOrModified(workspaceDirectory: string): boolean {
  const created = danger.git.created_files.find((file) => file.startsWith(workspaceDirectory));
  const modified = danger.git.modified_files.find((file) => file.startsWith(workspaceDirectory));
  return Boolean(created || modified);
}

function wereCreatedOrModifiedFilesExcluded(workspaceDirectory: string): boolean {
  const manifestExcludes = require(`./${workspaceDirectory}/tsconfig.cjs.json`).exclude;
  const manifestIncludes = require(`./${workspaceDirectory}/tsconfig.cjs.json`).include;
  const created = danger.git.created_files.filter((file) => file.startsWith(workspaceDirectory));
  const modified = danger.git.modified_files.filter((file) => file.startsWith(workspaceDirectory));

  // nothing to see, assume excluded
  if (created.length < 1 && modified.length < 1) {
    return true;
  }

  const changed = [...modified, ...created];
  const relevant: boolean = manifestIncludes
    .map((include) => {
      return match(changed, include).length > 0;
    })
    .every((value: boolean) => value);

  if (!relevant) {
    return true;
  }

  const excluded: boolean = manifestExcludes
    .map((exclude) => {
      return match(changed, exclude).length === changed.length;
    })
    .every((value: boolean) => value);

  return excluded;
}

function isWorkspaceChangelogUpdated(workspaceDirectory: string): boolean {
  return (
    danger.git.created_files.includes(`${workspaceDirectory}/CHANGELOG.md`) ||
    danger.git.modified_files.includes(`${workspaceDirectory}/CHANGELOG.md`)
  );
}

async function isWorkspaceVersionUpdated(workspaceDirectory: string): Promise<boolean> {
  if (
    !danger.git.created_files.includes(`${workspaceDirectory}/package.json`) &&
    !danger.git.modified_files.includes(`${workspaceDirectory}/package.json`)
  ) {
    return false;
  }
  const { before, after } = await danger.git.diffForFile(`${workspaceDirectory}/package.json`);
  const beforeJSON = JSON.parse(before);
  const afterJSON = JSON.parse(after);
  return beforeJSON.version !== afterJSON.version;
}

async function expectManifestToBeBumped() {
  const workspaceDirectories = getWorkspaceDirectories();
  await Promise.all(
    workspaceDirectories.map(async (workspaceDirectory) => {
      const filesCreatedOrModifiedFilesExcluded = wereCreatedOrModifiedFilesExcluded(workspaceDirectory);
      const filesInWorkspaceWereCreatedOrModified = wereFilesInWorkspaceCreatedOrModified(workspaceDirectory);
      const workspaceVersionWasUpdated = await isWorkspaceVersionUpdated(workspaceDirectory);
      if (
        filesInWorkspaceWereCreatedOrModified &&
        !workspaceVersionWasUpdated &&
        !filesCreatedOrModifiedFilesExcluded
      ) {
        fail(
          `Files in the "${workspaceDirectory}" workspace were modified but the version field in package.json was not.`
        );
      }
    })
  );
}

async function expectChangelogToBeCreatedOrUpdated() {
  const workspaceDirectories = getWorkspaceDirectories();
  workspaceDirectories.forEach((workspaceDirectory) => {
    const filesInWorkspaceWereCreatedOrModified = wereFilesInWorkspaceCreatedOrModified(workspaceDirectory);
    const changelogWasUpdated = isWorkspaceChangelogUpdated(workspaceDirectory);
    if (filesInWorkspaceWereCreatedOrModified && !changelogWasUpdated) {
      fail(`Files in the "${workspaceDirectory}" workspace were modified but the CHANGELOG.md was not.`);
    }
  });
}

async function expectChangeLogToBeUpdatedWhenVersionUpdated() {
  const workspaceDirectories = getWorkspaceDirectories();
  workspaceDirectories.forEach(async (workspaceDirectory) => {
    const workspaceWhereVersionWasBumped = await isWorkspaceVersionUpdated(workspaceDirectory);
    const workspaceWhereChangelogWasUpdated = isWorkspaceChangelogUpdated(workspaceDirectory);
    const changeLogVersions = getVersionsFromChangelog(workspaceDirectory);
    const manifestVersion = getVersionFromManifest(workspaceDirectory);
    if (workspaceWhereVersionWasBumped && !workspaceWhereChangelogWasUpdated) {
      if (!manifestVersion) {
        fail(`Manfiest "package.json" does not have a value stored in the version field.`);
      }

      if (!changeLogVersions.includes(manifestVersion)) {
        fail(
          `Version field in package.json was modified in the "${workspaceDirectory}" workspace but the CHANGELOG.md was not.`
        );
      } else {
        warn(
          `Manifest package.json in the "${workspaceDirectory}" was modified. Version field value from package.json is found in CHANGELOG.md`
        );
      }
    }
  });
}

async function expectChangeLogToContainReferenceToManifestVersion() {
  const workspaceDirectories = getWorkspaceDirectories();
  workspaceDirectories.forEach((workspaceDirectory) => {
    const changeLogVersions = getVersionsFromChangelog(workspaceDirectory);
    const manifestVersion = getVersionFromManifest(workspaceDirectory);

    if (!changeLogVersions.includes(manifestVersion)) {
      warn(
        `Version field value in package.json was not referenced in the "${workspaceDirectory}" CHANGELOG.md or may have been formatted incorrectly.`
      );
    }
  });
}

async function expectYarnLockToNotBeDeleted() {
  const isYarnLockDeleted = danger.git.deleted_files.includes('yarn.lock');
  if (isYarnLockDeleted) {
    fail(`Cannot delete yarn.lock file`);
  }
}

(async () => {
  await expectChangeLogToContainReferenceToManifestVersion();
  await expectChangeLogToBeUpdatedWhenVersionUpdated();
  await expectChangelogToBeCreatedOrUpdated();
  await expectManifestToBeBumped();
  await expectYarnLockToNotBeDeleted();
})();
