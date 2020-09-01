#!/usr/bin/env bash
source ./ci/utils/install.sh

ENVIRONMENT=$1

if [ "$BUILDKITE_BRANCH" == "master" ]; then
    tag="latest"
else
    tag=$BUILDKITE_BRANCH
fi

echo "ENVIRONMENT: $ENVIRONMENT"
echo "tag: $tag"

lsd deploy --environment $ENVIRONMENT --project lui --tag $tag --directory ./website/dist/
