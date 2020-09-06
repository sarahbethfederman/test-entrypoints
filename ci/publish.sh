#!/usr/bin/env bash
source ./ci/utils/install.sh
if [ "$BUILDKITE" == "true" ]
then
    buildkite-agent artifact download '**/dist/**' '.'
fi

# setup .npmrc in each workspace directory so we can use NPM_TOKEN from env var to publish all the packages
if [ "$BUILDKITE" != "true" ]
then
  yarn manypkg exec cp "$PWD/.npmrc_config" .npmrc
fi

git checkout master

# publish each package version if it isn't already published
yarn changeset version

git config --global user.email $BUILDKITE_BUILD_CREATOR_EMAIL
git config --global user.name $BUILDKITE_BUILD_CREATOR

# Here we commit our versioning back to master
git add .
git commit -m "[ci skip] VERSION_COMMIT_NO_CI"
git push

yarn changeset publish

git push --follow-tags