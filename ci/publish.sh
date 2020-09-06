#!/usr/bin/env bash
source ./ci/utils/install.sh

# setup .npmrc in each workspace directory so we can use NPM_TOKEN from env var to publish all the packages
if [ "$BUILDKITE" != "true" ]
then
  yarn manypkg exec cp "$PWD/.npmrc_config" .npmrc
fi

# publish each package version if it isn't already published
yarn changeset version

# Here we commit our versioning back to master
git add .
git commit -m "[ci skip] VERSION_COMMIT_NO_CI"
git push

yarn changeset publish

git push --follow-tags