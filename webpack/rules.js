module.exports = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
  {
    test: /\.(s)?css$/,
    use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: 'file-loader',
  },
];