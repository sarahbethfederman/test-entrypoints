#!/usr/bin/env bash
source ./ci/utils/install.sh

env=$1;

# download built packages
if [ "$BUILDKITE" == "true" ]
then
    buildkite-agent artifact download '**/dist/**' '.'
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

baseurl=$(yarn lsd url --environment $env --project lui --tag $tag)
if [[ $? -ne  0 ]]; then
  echo $baseurl
  exit 1
fi


echo "baseUrl:$baseurl"
echo "Building with \n"
echo "environment " + $env + "\n"
echo "tag  " + $tag + "\n"

export BASE_URL=$baseurl
export ENVIRONMENT=$env
export TAG=$tag
export NODE_ENV=production

yarn run build:website

