const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // html-webpack-plugin 这个插件的作用
        // 通过一个模版生产首页，然后，把输出文件自动嵌入到这个文件中
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ]
}
