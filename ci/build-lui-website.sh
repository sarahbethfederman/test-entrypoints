#!/usr/bin/env bash
source ./ci/utils/install.sh

env=$1;

if [ "$BUILDKITE_BRANCH" == "master" ]; then
    tag="latest"
else
    tag=$BUILDKITE_BRANCH
fi

baseurl=$(lsd url --environment $env --project lui --tag $tag)
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

yarn run build:assets
yarn run build:icons
yarn run build:fancy-icons
yarn run build:lender-logos
yarn run build:theme
yarn run build:website

