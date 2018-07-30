const { execSync } = require('child_process');
const netlify = require('netlify');

// @see https://confluence.atlassian.com/bitbucket/environment-variables-794502608.html
const BITBUCKET_BRANCH = process.env.BITBUCKET_BRANCH;
const BITBUCKET_COMMIT = process.env.BITBUCKET_COMMIT;
const BITBUCKET_REPO_SLUG = process.env.BITBUCKET_REPO_SLUG;
const BITBUCKET_REPO_OWNER = process.env.BITBUCKET_REPO_OWNER;

// bitbucket user details
const BITBUCKET_USERNAME = 'jamesatlendi';
const BITBUCKET_PASSWORD = process.env.BITBUCKET_PASSWORD;

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
    const client = netlify.createClient({ access_token: NETLIFY_TOKEN });
    const site = await client.site(NETLIFY_SITE);
    const deploy = await site.createDeploy({ dir: './dist', draft: !isMasterBranch });
    await deploy.waitForReady();

    const branchDeployUrl = isMasterBranch ? deploy.ssl_url : deploy.deploy_ssl_url;

    // log the branch URL
    console.log(`Deployed to: ${branchDeployUrl}`);

    // add the branch URL to the bitbucket UI
    // https://confluence.atlassian.com/bitbucket/publish-and-link-your-build-artifacts-872137736.html
    execSync(
      `
      curl \
        --verbose \
        --header "Content-Type:application/json" \
        --request POST \
        --user "${BITBUCKET_USERNAME}:${BITBUCKET_PASSWORD}" \
        --data '${JSON.stringify({
          state: 'SUCCESSFUL',
          key: 'website',
          name: 'Website',
          description: 'Browse the deployed website build.',
          url: branchDeployUrl,
        })}' \
        "https://api.bitbucket.org/2.0/repositories/${BITBUCKET_REPO_OWNER}/${BITBUCKET_REPO_SLUG}/commit/${BITBUCKET_COMMIT}/statuses/build"
      `,
      { stdio: [0, 1, 2] }
    );
  } catch (error) {
    console.error(error);
    return;
  }
})();
