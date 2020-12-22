const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildDir = path.resolve(__dirname, '../dist');

module.exports = {
  mode: 'production',
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
            options: {
              //URL の解決を無効に
              url: false,
              // ソースマップを有効に
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                outputStyle: 'compressed',
              },
              // ソースマップを有効に
              sourceMap: true,
            },
          },
        ]
      },
    ]
  },
  target: ["web", "es5"],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/style.css'
    })
  ],
  //source-map タイプのソースマップを出力
  devtool: "source-map",
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: /node_modules/  //正規表現で指定
  },
};
