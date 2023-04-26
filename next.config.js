/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    localeDetection: false
  }
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
})

module.exports = withBundleAnalyzer(nextConfig)
