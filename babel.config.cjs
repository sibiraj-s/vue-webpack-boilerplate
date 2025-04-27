const babelRc = (api) => {
  const isTest = api.env('test');

  return {
    presets: [
      !isTest && [
        // Latest stable ECMAScript features
        '@babel/preset-env',
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
      isTest && [
        '@babel/preset-env',
        {
          // describe the environments support/targets
          targets: {
            // compile against the current node version
            node: 'current',
          },
        },
      ],
    ].filter(Boolean),
    plugins: [
      // include required plugins here
    ],
  };
};

module.exports = babelRc;
