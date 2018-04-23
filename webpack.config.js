const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: "./src/index.ts",
    print: "./src/print.js"
  },
  resolve: {
    extensions: ["webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "No",
      template: "./src/common/html/index.html",
      filename: "index.html"
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {  
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
      },
      {
        test: /\.(html)$/,
        exclude: [/node_modules/, 'index.html'],
        use: { 
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
            exportAsEs6Default: true
          }
        }
      }
    ]
  }
};