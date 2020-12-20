# ts program

npm i webpack webpack-cli webpack-dev-server -D

公共环境

生产环境

开发环境

分开配置，最后通过插件来合并

```bash
build/
├── webpack.base.config.js # 公共环境
├── webpack.config.js      # 所有配置文件的入口
├── webpack.dev.config.js  # 开发环境
└── webpack.pro.config.js  # 生产环境

```

npm i ts-loader typescript -D

ts-in-action/sourcecode/ts-base/build/webpack.base.config.js
