/** @type {import('next').NextConfig} */

const path = require('path')

const withTM = require('next-transpile-modules')([
  '@ericz1803/react-google-calendar',
])

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withTM({
  nextConfig,
})
