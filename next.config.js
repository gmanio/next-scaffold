const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = (phase, { defaultConfig }) => {
  return withCSS({
    cssModules: true,
    env: {
      customKey: 'customValue'
    },
    webpack: function (config, { isServer }) {
      config.resolve.alias['@src'] = path.join(__dirname, './src');

      // if (!isServer) {
      //   config.node = {
      //     net: 'empty',
      //     tls: 'empty'
      //   }
      // }
      // config.devServer = config.devServer || {};
      // config.devServer.proxy = {
      //   '/api': {
      //     target: 'http://localhost:5000',
      //     changeOrigin: true,
      //     secure: false,
      //     onProxyReq(request, req, res) {
      //       request.setHeader('origin', 'http://localhost:5000')
      //     }
      //     //pathRewrite: { '^/api': '/api' }
      //   }
      // }

      return config;
    }
  });
}
