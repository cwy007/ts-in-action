const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "app.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: [/node_modules/, /sourcecode/], // 忽略 sourcecode 文件夹下的ts文件
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/tpl/index.html",
    }),
  ],
};
