/**
 * Created by sf on 2017/2/28.
 */

module.exports = {
    //entry: './src/script/main.js',      //webpack打包的输入文件
    entry: ['./src/script/main.js', './src/script/main2.js'],
    //如果entry是数组，是将两个平行的、不相依赖的文件，打包在一起
    output: {
        path: './dist/js',              //打包的输出文件夹
        filename: 'bundle.js'           //打包的输出文件名
    }
};