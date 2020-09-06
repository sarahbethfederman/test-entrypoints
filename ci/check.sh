#!/usr/bin/env bash
source ./ci/utils/install.sh

# if we are on a branch, check for a changeset
if [ "$BUILDKITE_BRANCH" != "master" ]; then
  yarn changeset status --since master
fi

yarn run check