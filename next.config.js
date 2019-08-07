const withCSS = require('@zeit/next-css');

module.exports = (phase, { defaultConfig }) => {
  return withCSS({
    cssModules: true,
    env: {
      customKey: 'kkkk'
    }
  });
}