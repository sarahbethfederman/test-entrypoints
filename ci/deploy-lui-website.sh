#!/usr/bin/env bash
source ./ci/utils/install.sh

ENVIRONMENT=$1;

if [ "$BUILDKITE" == "true" ]
then
    mkdir -p ./website/dist
    buildkite-agent artifact download 'website/dist/**/*' 'website/dist'
fi

if [ "$BITBUCKET_BRANCH" == "master" ] || [ "$BUILDKITE_BRANCH" == "master" ]
then
    tag="latest"
elif [ "$BUILDKITE" == "true" ]
then
    tag=$BUILDKITE_BRANCH
else
    tag=$BITBUCKET_BRANCH
fi

echo "ENVIRONMENT: $ENVIRONMENT"
echo "tag: $tag"

yarn lsd deploy --environment $ENVIRONMENT --project lui --tag $tag --directory ./website/dist/
