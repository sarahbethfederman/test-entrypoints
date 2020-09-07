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

git checkout
git config --global user.email $BUILDKITE_BUILD_CREATOR_EMAIL
git config --global user.name $BUILDKITE_BUILD_CREATOR

# version packages
yarn changeset version

if [ -z "$(git status --porcelain)" ] 
then 
  # Working directory clean
  echo 'clean!'
   -z "$(git status --porcelain)"
else 
  # Uncommitted changes
  echo 'changed!'
fi

# if output=$(git status --porcelain) && [ -z "$output" ]; then
#   # Working directory clean
# else 
#   # Here we commit our versioning back to master
#   git add .
#   git commit -m "[ci skip] VERSION_COMMIT_NO_CI"
#   git push
# fi

# yarn changeset publish

# # Here we commit our new tags back to master
# git push --follow-tags