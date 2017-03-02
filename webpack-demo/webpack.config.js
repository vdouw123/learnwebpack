/**
 * Created by sf on 2017/2/28.
 */

// module.exports = {
//     //entry: './src/script/main.js',      //webpack打包的输入文件
//     entry: ['./src/script/main.js', './src/script/main2.js'],   //如果entry是数组，是将两个平行的、不相依赖的文件，打包在一起
//     output: {
//         path: './dist/js',              //打包的输出文件夹
//         filename: 'bundle.js'           //打包的输出文件名
//     }
// };


// module.exports = {
//     //entry为对象，一般是处理多页面的打包
//     entry: {
//         main: './src/script/main.js',
//         main2: './src/script/main2.js'
//     },
//     output: {
//         path: './dist/js',
//         filename: '[name].js'
//         //因为要生成多少文件，所以filename就不能是一个写死的名字
//     }
// };
// //执行npm run webpack后，可以看出dist里面多了main.js和main2.js


// module.exports = {
//     entry: {
//         main: './src/script/main.js',
//         main2: './src/script/main2.js'
//     },
//     output: {
//         path: './dist/js',
//         filename: '[name]-[hash].js'
//     }
// };

var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: [
    //     './src/script/main.js',
    //     './src/script/main2.js',
    //     './src/script/main3.js'
    // ],
    entry: {
        main: './src/script/main.js',
        main2: './src/script/main2.js',
        main3: './src/script/main3.js'
    },
    output: {
        path: './dist',
        filename: 'js/[name]-[chunkhash].js',
        //publicPath: 'http://127.0.0.11/webpack-demo/dist/',    //打包后生成的引入加上绝对路径
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-excludeChinks.html',             //输出filename
            template: 'morepagetemp.html',      //关联模板
            inject: 'head',                     //放在head或body中
            //inject: false,
            title: 'this is page 1',
            //chunks:["main","main2"],
            excludeChunks:["main"]              //加载所有，除了main.js
            // date: new Date(),
            // minify: {
            //     removeComments: true,   //删除注释
            //     collapseWhitespace: true,  //删除空格
            //     //https://github.com/kangax/html-minifier#options-quick-reference
            // }
        }),
        new htmlWebpackPlugin({
            filename: 'index2-excludeChinks.html',
            template: 'morepagetemp.html',
            inject: 'head',
            title: 'this is page 2',
            chunks:["main2"]
        }),
        new htmlWebpackPlugin({
            filename: 'index3-excludeChinks.html',
            template: 'morepagetemp.html',
            inject: 'head',
            title: 'this is page 3',
            chunks:["main3"]
        })
    ]
};






