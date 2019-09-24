import {
  expectChangeLogToContainReferenceToManifestVersion,
  expectChangeLogToBeUpdatedWhenVersionUpdated,
  expectChangelogToBeCreatedOrUpdated,
  expectChangelogToUseValidLinks,
  expectManifestToBeBumped,
  expectYarnLockToNotBeDeleted,
} from './dangerfile.base';

(async () => {
  await expectChangeLogToContainReferenceToManifestVersion();
  await expectChangeLogToBeUpdatedWhenVersionUpdated();
  await expectChangelogToBeCreatedOrUpdated();
  await expectChangelogToUseValidLinks();
  await expectManifestToBeBumped();
  await expectYarnLockToNotBeDeleted();
})();
