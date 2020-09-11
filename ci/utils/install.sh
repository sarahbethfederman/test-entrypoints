#!/usr/bin/env bash

# fail on first error
set -e

# add yarn binaries to the path
export PATH="$PATH:$(yarn bin)"

# install all the dependencies
yarn --mutex network
