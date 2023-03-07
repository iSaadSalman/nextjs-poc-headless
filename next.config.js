/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['127.0.0.1:8000', 'https://2257-31-166-34-44.in.ngrok.io'],
  },
}

module.exports = nextConfig
