/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_URL:'https://loadingwalla.com/',
  }
}

module.exports = nextConfig
