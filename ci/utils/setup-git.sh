#!/usr/bin/env bash

# checkout the master branch so we have it locally and dangerjs can diff it to the current branch
if [ "$BUILDKITE_BRANCH" != "master" ]; then
  git checkout master # master doesn't exist until we check it out
  git checkout - # check out the previous ref
fi
