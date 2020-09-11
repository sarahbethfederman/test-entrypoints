#!/usr/bin/env bash

# fail on first error
set -e

# add yarn binaries to the path
export PATH="$PATH:$(yarn bin)"
echo $NPM_TOKEN
# # setup .npmrc in the root directory so we can use NPM_TOKEN from env var to install all the dependencies
cp .npmrc_config .npmrc

# install all the dependencies
yarn --mutex network
