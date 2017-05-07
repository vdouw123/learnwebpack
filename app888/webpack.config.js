/**
 * Created by sf on 2017/3/3.
 */

var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),       //绝对路径
                query: {
                    presets: ['latest']
                }
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']},
            {test: /\.less$/, loader: 'style-loader!css-loader!postcss-loader!less-loader'},
            {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.tpl$/, loader: 'ejs-loader'},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['url-loader?limit=80000&name=assets/[name]-[hash:5].[ext]', 'img-loader']
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            minimize: true,
            compress: {warnings: false},
            output: {comments: false},
            minChunks: Infinity
        })
    ]
};

