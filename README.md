# 学学webpack
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


entry: ['./src/script/main.js', './src/script/main2.js'],
如果entry是数组，是将两个平行的、不相依赖的文件，打包在一起

entry为对象，一般是处理多页面的打包

output的filename: '[name]-[chunkhash].js'时，多次打包，只有修改的文件，chunkhash有改变。
所以，可以将chunkhash理解为这个文件的版本号。

index.html动态调用含有chunkhash名的文件，需要安装html-webpack-plugin
（npm install html-webpack-plugin --save-dev）

webpack.config.js中，如何设置html-webpack-plugins，请查看官方文档：
https://webpack.js.org/concepts/plugins/

webpack.config.js先引入html-webpack-plugin
var htmlWebpackPlugin = require('html-webpack-plugin');
然后设置plugins: [new htmlWebpackPlugin()]
可以看出，dist/js/文件夹中，多了一个正常引入chunkhash文件的index.html

那么问题来了，项目下的index.html和dist/js/index.html，其实并没有任何联系

webpack.config.js中设置new htmlWebpackPlugin({template: 'index.html'})即可

htmlWebpackPlugin中设置变量，在模板index.html中使用<%= htmlWebpackPlugin.options.变量名 %>，然后在打包好的index.html中读取出来。

取消打包后自动插入：inject: false,
页面中直接引入：script src="<%= htmlWebpackPlugin.files.chunks.main.entry %>"></script

打包后生成的引入加上绝对路径：publicPath: 'http://127.0.0.11/webpack-demo/dist/'

minify参数查阅官方地址：https://github.com/kangax/html-minifier

处理多页面的时候可以看出，如果entry为数组，多个JS打包成一个；
如果entry为对象，JS单独打包，单独引用。

安装babel-loader，具体参见官网：
http://babeljs.io/docs/setup/
（npm install --save-dev babel-loader babel-core）

安装babel-loader的插件presets，具体看官网：
http://babeljs.io/docs/plugins/
（npm install --save-dev babel-cli babel-preset-latest）

babel的作用是将es6转换成es5

安装postcss-loader
（npm install postcss-loader --save-dve）

安装postcss-loader的插件autoprefixer
（npm install autoprefixer --save-dev）

安装less-loader
（npm i less-loder --save-dev）

安装less
（npm install less --save-dev）

安装sass
（npm install sass-loader --save-dev）

安装html-loader
（npm install html-loader --save-dev）

html loader module for webpack
http://webpack.github.io/docs/list-of-loaders.html#templating
https://github.com/webpack-contrib/html-loader








