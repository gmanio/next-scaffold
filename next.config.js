const withCSS = require('@zeit/next-css');

module.exports = (phase, { defaultConfig }) => {
  console.log(phase);
  console.log(defaultConfig);

  return withCSS({
    cssModules: true,
    env: {
      customKey: 'kkkk'
    }
  });
}