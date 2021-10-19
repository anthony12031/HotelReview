const nextTranslate = require('next-translate')

// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   ...nextTranslate
// }

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  }
})
