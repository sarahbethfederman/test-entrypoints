const {execSync} = require('child_process');
const netlify = require('netlify');

// @see https://confluence.atlassian.com/bitbucket/environment-variables-794502608.html
const BITBUCKET_BRANCH = process.env.BITBUCKET_BRANCH;

// netlify API token
const NETLIFY_TOKEN = process.env.NETLIFY_TOKEN;
const NETLIFY_SITE = '05ed6280-f2e0-4de3-8b93-867aaed424cf';

(async function() {

  const isMasterBranch = BITBUCKET_BRANCH === 'master';

  // ignore non-branch builds
  if (!BITBUCKET_BRANCH) {
    console.error(`This build has no branch and cannot be deployed.`);
    return;
  }

  // deploy the branch
  try {
    const client = netlify.createClient({access_token: NETLIFY_TOKEN});
    const site = await client.site(NETLIFY_SITE);
    const deploy = await site.createDeploy({dir: './storybook-static', draft: !isMasterBranch});
    await deploy.waitForReady();
    
    const branchDeployUrl = isMasterBranch ? deploy.ssl_url : deploy.deploy_ssl_url;

    // log the branch URL
    console.log(`Deployed to: ${branchDeployUrl}`);

    // add the branch URL to the bitbucket UI
    // TODO: use https://www.npmjs.com/package/bitbucket-build-status to make the deploy URL more accessible
    //  => might need to get a bitbucket account specially for the build agent so we can use it's username and password

  } catch (error) {
    console.error(error);
    return;
  }

})();
