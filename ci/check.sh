#!/usr/bin/env bash
source ./ci/utils/install.sh
source ./ci/utils/setup-git.sh

if [ "$BUILDKITE_BRANCH" == "master" ]; then
  yarn run check:danger
fi
