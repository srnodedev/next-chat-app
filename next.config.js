/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
  	locales: ["en"],
  	defaultLocale: "en",
  },
  appDir: true,
}

module.exports = nextConfig
