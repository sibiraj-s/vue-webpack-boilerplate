const rules = [
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader',
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
  {
    test: /\.(s)?css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name][ext][query]',
    },
  },
];

export default rules;
