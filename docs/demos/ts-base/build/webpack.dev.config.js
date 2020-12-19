module.exports = {
  // cheap 表示会忽略文件的列信息，在调试时，列信息是没有用的
  // module的含义：会定位到我们的ts源码，而不是经过loader转译后的js源码
  // eval-source-map 含义是：会将source-map 以data url 的方式打包到文件中
  // 重编译速度很快，不用担心性能问题
  devtool: "cheap-module-eval-source-map",
};
