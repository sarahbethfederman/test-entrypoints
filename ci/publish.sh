#!/usr/bin/env bash
source ./ci/utils/install.sh

# setup .npmrc in each workspace directory so we can use NPM_TOKEN from env var to publish all the packages
# yarn manypkg exec cp "$PWD/.npmrc_config" .npmrc

# publish each package version if it isn't already published
yarn changeset version
yarn changeset publish