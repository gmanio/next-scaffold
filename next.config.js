const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = (phase, { defaultConfig }) => {
  return withCSS({
    cssModules: true,
    env: {
      customKey: 'kkkk'
    },
    webpack: function (config, options) {
      config.resolve.alias['@src'] = path.join(__dirname, './src');

      return config;
    }
  });
}