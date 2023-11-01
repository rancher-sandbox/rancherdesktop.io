module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NEXT_PUBLIC_DEVELOPMENT ? '' : '/rancherdesktop.io/',
  basePath: process.env.NEXT_PUBLIC_DEVELOPMENT ? '' : '/rancherdesktop.io',
}
