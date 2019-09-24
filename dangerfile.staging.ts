import {
  expectChangeLogToContainReferenceToManifestVersion,
  expectChangeLogToBeUpdatedWhenVersionUpdated,
  expectChangelogToBeCreatedOrUpdated,
  expectChangelogToUseValidLinks,
  expectManifestToBeBumped,
  expectYarnLockToNotBeDeleted,
  expectPackageVersionsToBePreRelease,
} from './dangerfile.base';

(async () => {
  await expectChangeLogToContainReferenceToManifestVersion();
  await expectChangeLogToBeUpdatedWhenVersionUpdated();
  await expectChangelogToBeCreatedOrUpdated();
  await expectChangelogToUseValidLinks();
  await expectManifestToBeBumped();
  await expectYarnLockToNotBeDeleted();
  await expectPackageVersionsToBePreRelease();
})();
