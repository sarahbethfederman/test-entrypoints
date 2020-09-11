#!/usr/bin/env bash
source ./ci/utils/install.sh

if [ "$BUILDKITE" == "true" ]
then
    buildkite-agent artifact download '**/dist/**/*' '.'
fi

# setup .npmrc in each workspace directory so we can use NPM_TOKEN from env var to publish all the packages
if [ "$BUILDKITE" != "true" ]
then
  yarn manypkg exec cp "$PWD/.npmrc_config" .npmrc
fi

git config --global user.email $BUILDKITE_BUILD_CREATOR_EMAIL
git config --global user.name $BUILDKITE_BUILD_CREATOR

# version packages
yarn changeset version

# check if that resulted in changes
set +e
git diff-index --quiet HEAD

if [ $? == 1 ] ; then
  set -e
  # Here we commit our versioning back to master
  git add -u
  git commit -m "[ci skip] VERSION_COMMIT_NO_CI"
  git push origin HEAD:master

  # publish unpublished versions
  yarn changeset publish

  # Here we commit our new tags back to master
  git push origin HEAD:master --follow-tags
else
  set -e
  echo 'no new changesets!'
fi

