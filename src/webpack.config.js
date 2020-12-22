const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildDir = path.resolve(__dirname, '../docs');

module.exports = {
  mode: 'development',
  entry: './assets/scripts/script.js',
  output: {
    filename: 'assets/scripts/script.js',
    path: buildDir
  },
  devServer: {
    contentBase: buildDir,
    watchContentBase: true,
    port: 4649,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ]
      },
    ]
  },
  target: ["web", "es5"],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/style.css',
      ignoreOrder: true,
    })
  ],
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: /node_modules/  //正規表現で指定
  },
};
