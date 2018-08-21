#!/usr/bin/env bash
source ./ci/utils/install.sh

yarn add react@^15 react-dom@^15 enzyme-adapter-react-15 react-addons-test-utils@^15 react-test-renderer@^15 react-addons-test-utils@^15 -W

yarn run test-react-15
