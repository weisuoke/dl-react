const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const APP_SOURCE = path.join(__dirname, "src");

exports.devServer = () => ({
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: "/"
    },
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
});

exports.page = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html")
    })
  ]
});

exports.loadTS = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?/,
        include: APP_SOURCE,
        loader: "swc-loader",
      }
    ]
  }
})

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
});

exports.loadLess = () => ({
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      }
    ]
  }
});

exports.loadPic = () => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png|bmp|gif)/,
        type: 'asset/resource',
        generator: {
          filename: '[hash][ext]'
        }
      }
    ]
  }
})