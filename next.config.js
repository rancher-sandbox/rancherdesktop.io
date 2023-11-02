const prefixRequired = (process.env.GITHUB_ACTIONS && !process.env.NEXT_PUBLIC_CUSTOM_DOMAIN) || false;
const repoName = process.env?.GITHUB_REPOSITORY?.replace(/.*?\//, '');

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: prefixRequired ? `/${repoName}/` : '',
  basePath: prefixRequired ? `/${repoName}` : ''
}
