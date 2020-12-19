const merge = require("webpack-merge"); // 作用：把两个配置文件合并
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");

module.exports = (env, argv) => {
  let config = argv.mode === "development" ? devConfig : proConfig;
  return merge(baseConfig, config);
};
