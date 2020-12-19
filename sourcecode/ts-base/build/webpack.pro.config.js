const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
      // 每次成功构建后，帮助我们清空dist目录
      // 由于为了避免缓存，在文件后加入 hash，导致多处构建后产生很多无用的文件
      //
        new CleanWebpackPlugin()
    ]
}
