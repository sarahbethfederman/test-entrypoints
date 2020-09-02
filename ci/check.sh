#!/usr/bin/env bash
source ./ci/utils/install.sh
source ./ci/utils/setup-git.sh

yarn run check
# if [ "$BITBUCKET_BRANCH" == "master" ]; then
#   yarn run check:danger
# fi
