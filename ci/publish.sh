#!/usr/bin/env bash
source ./ci/utils/install.sh

# setup .npmrc in each workspace directory so we can use NPM_TOKEN from env var to publish all the packages 
lerna exec cp "$PWD/.npmrc_config" .npmrc

# publish each package version if it isn't already published
lerna exec --ignore @lendi-ui/reset --ignore @lendi-ui/inline-dropdown -- publish-if-not-published -- --access=public 
