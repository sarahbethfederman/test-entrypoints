#!/usr/bin/env bash
source ./ci/utils/install.sh

if [ "$BITBUCKET_BRANCH" == "master" ]; then
    tag="latest"
else
    tag=$BITBUCKET_BRANCH
fi

lsd deploy --environment $ENVIRONMENT --project lui --tag $TAG --directory ./website/dist/

node ./ci/deploy.js
