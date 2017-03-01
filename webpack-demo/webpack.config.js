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


module.exports = {
    entry: {
        main: './src/script/main.js',
        main2: './src/script/main2.js'
    },
    output: {
        path: './dist/js',
        filename: '[name]-[hash].js'
    }
};





