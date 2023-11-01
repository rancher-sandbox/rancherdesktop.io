module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  //assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : '',
}
