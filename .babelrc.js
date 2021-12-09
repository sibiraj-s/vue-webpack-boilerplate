const babelRc = () => {
  return {
    presets: [
      [
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
    ],
    plugins: [
      // include required plugins here
    ],
  };
};

export default babelRc;
