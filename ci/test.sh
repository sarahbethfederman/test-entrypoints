#!/usr/bin/env bash
source ./ci/utils/install.sh

# Assets from icons need to be available for the tests
yarn run build:icons
yarn run build:fancy-icons

yarn run test 
