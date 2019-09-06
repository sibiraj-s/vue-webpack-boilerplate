/* eslint-disable global-require */

const babelRc = api => {
  const { env } = api;

  const isEnvDevelopment = env() === 'development';
  const isEnvProduction = !isEnvDevelopment;

  return {
    presets: [
      (isEnvProduction || isEnvDevelopment) && [
        // Latest stable ECMAScript features
        require('@babel/preset-env').default,
        {
          // Allow importing core-js in entrypoint and use browserlist to select polyfills
          useBuiltIns: 'entry',
          // Use corejs@3
          corejs: 3,
          // Do not transform modules to CJS
          modules: false,
          // Exclude transforms that make all code slower
          exclude: ['transform-typeof-symbol'],
        },
      ],
    ].filter(Boolean),
    plugins: [
      // include plugin required here
    ].filter(Boolean),
  };
};

module.exports = babelRc;
