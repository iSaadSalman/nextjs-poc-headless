/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['127.0.0.1:8000', 'http://headlessbackend.brackets-tech.com'],
  },
}

module.exports = nextConfig
