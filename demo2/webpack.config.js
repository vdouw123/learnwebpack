/**
 * Created by sf on 2017/3/3.
 */

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/script/main.js',      //打包的输入文件
    output: {
        path: './dist',                  //要输出的目录
        filename: 'main.bundle.js'       //要输出的名称
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',     //页面输入的模板
            filename: 'index.html',     //输出的文件名
            inject: 'head',             //head中插入打包的js
        })
    ]
};