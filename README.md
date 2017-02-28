# 张三丰学webpack
follow imooc to learn webpack

视频教程地址：
http://www.imooc.com/learn/802

新建文件夹（mkdir webpack-test）

npm初始化（npm init）

安装webpack（npm install webpack --save-dev）

首先你需要安装一个全局的webpack（npm install webpack -g），这样你才可以正确的使用webpack这个命令

使用webpack打包hello.js到hello.bundle.js，使用命令（webpack hello.js hello.bundle.js）

webpack天生不支持.css的文件，需要安装css-loader和style-loader

安装css-loader（npm install css-loader style-loader --save-dev）

require('style-loader!css-loader!./style.css');
改成
require('./style.css');
的话，需要如下的命令（webpack hello.js hello.bundle.js --module-bind css=style-loader!css-loader）

打包时，通过以下的一些命令，可以看到我们需要的信息

（webpack hello.js hello.bundle.js --module-bind css=style-loader!css-loader --watch）

（webpack hello.js hello.bundle.js --module-bind css=style-loader!css-loader --progress）

（webpack hello.js hello.bundle.js --module-bind css=style-loader!css-loader --progress --display-modules）

（webpack hello.js hello.bundle.js --module-bind css=style-loader!css-loader --progress --display-modules --display-reasons）

webpack.config.js设置   https://webpack.js.org/configuration/

在目录运行webpack的时候，会自动查找目录下的webpack.config.js里面的配置
module.exports = {
    entry: './src/script/main.js',      //入口文件
    output: {
        path: './dist/js',              //输入的文件夹
        filename: 'bundle.js'           //输出的文件名
    }
};
此为最简单的webpack.config.js设置

如果我们的配置文件改成webpack.dev.config.js，那个运行webpack命令是无法打包的，要运行（webpack --config webpack.dev.config.js）。

将webpack参数添加到npm脚本

在package.json中设置

（"webpack": "webpack --config webpack.config.js --progress --colors --display-modules --display-reasons"）

后，可以在命令行中执行（npm run webpack）直接运行






