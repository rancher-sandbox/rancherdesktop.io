const isGithubActions = process.env.GITHUB_ACTIONS || false;

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isGithubActions ? '/rancherdesktop.io/' : '',
  basePath: isGithubActions ? '/rancherdesktop.io' : ''
}
