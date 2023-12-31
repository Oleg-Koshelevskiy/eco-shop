/** @type {import('next').NextConfig} */
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const nextConfig = {
  // transpilePackages: ["@package/bug"],
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "randomuser.me",
      "images.unsplash.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      "@mongodb-js/zstd": false,
      "@aws-sdk/credential-providers": false,
      snappy: false,
      aws4: false,
      "mongodb-client-encryption": false,
      kerberos: false,
      "supports-color": false,
    });
    config.plugins.push(
      new LodashModuleReplacementPlugin({
        modularize: true,
        omit: "omit",
        keys: "keys",
      })
    );
    return config;
  },
  // webpack(config) {
  //   config.experiments = {
  //     ...config.experiments,
  //     topLevelAwait: true,
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;
