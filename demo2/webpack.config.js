/**
 * Created by sf on 2017/3/3.
 */

var htmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     //entry: './src/script/main.js',      //打包的输入文件
//     //entry: ['./src/script/main.js', './src/script/main2.js'],
//     // output: {
//     //     path: './dist',                  //要输出的目录
//     //     filename: 'main.bundle.js'       //要输出的名称
//     // },
//     entry: {
//         main: './src/script/main.js',
//         main2: './src/script/main2.js'
//     },
//     output: {
//         path: './dist',
//         //filename: '[name].js'
//         filename: '[chunkhash].js'
//     },
//     plugins: [
//         new htmlWebpackPlugin({
//             template: 'index.html',     //页面输入的模板
//             filename: 'index.html',     //输出的文件名
//             inject: 'head',             //head中插入打包的js
//         }),
//         new htmlWebpackPlugin({
//             template: 'index2.html',
//             filename: 'index2.html',
//             inject: 'head'
//         })
//     ]
// };

//不同的页面，加载不同的JS（1）
// module.exports = {
//     entry: {
//         main: './src/script/main.js',
//         main2: './src/script/main2.js'
//     },
//     output: {
//         path: './dist',
//         filename: '[chunkhash].js'
//     },
//     plugins: [
//         new htmlWebpackPlugin({
//             template: 'indexx.html',
//             filename: 'index.html',
//             date: new Date(),
//             //inject: 'head'
//             inject: false
//         }),
//         new htmlWebpackPlugin({
//             template: 'indexx2.html',
//             filename: 'index2.html',
//             inject: false
//         })
//     ]
// };

不同的页面，加载不同的JS（2）
module.exports = {
    entry: {
        main: './src/script/main.js',
        main2: './src/script/main2.js'
    },
    output: {
        path: './dist',
        filename: '[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'indexx.html',
            filename: 'index.html',
            date: new Date(),
            inject: 'head',
            chunks:['main']
        }),
        new htmlWebpackPlugin({
            template: 'indexx2.html',
            filename: 'index2.html',
            inject: 'head',
            chunks:['main2']
        })
    ]
};