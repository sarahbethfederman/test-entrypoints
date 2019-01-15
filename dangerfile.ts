import * as path from 'path';
import * as glob from 'fast-glob';
import { danger, fail, warn } from 'danger';

function getWorkspaceDirectories(): string[] {
  const manifest = require('./package.json');
  const paths = glob.sync<string>(manifest.workspaces.map((pattern) => `${__dirname}/${pattern}/package.json`));
  return paths.filter((p) => !Boolean(require(p).private)).map((p) => path.relative('.', path.dirname(p)));
}

function wereFilesInWorkspaceCreatedOrModified(workspaceDirectory: string): boolean {
  const created = danger.git.created_files.find((file) => file.startsWith(workspaceDirectory));
  const modified = danger.git.modified_files.find((file) => file.startsWith(workspaceDirectory));
  return Boolean(created || modified);
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
      const filesInWorkspaceWereCreatedOrModified = wereFilesInWorkspaceCreatedOrModified(workspaceDirectory);
      const workspaceVersionWasUpdated = await isWorkspaceVersionUpdated(workspaceDirectory);
      if (filesInWorkspaceWereCreatedOrModified && !workspaceVersionWasUpdated) {
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

async function expectYarnLockToNotBeDeleted() {
  const isYarnLockDeleted = danger.git.deleted_files.includes('yarn.lock');
  if (isYarnLockDeleted) {
    fail(`Cannot delete yarn.lock file`);
  }
}

(async () => {
  // await expectChangelogToBeCreatedOrUpdated();
  // await expectManifestToBeBumped();
  // await expectYarnLockToNotBeDeleted();
})();
