module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')({
                                        broswers: ['last 5 versions']
                                    })
                                ];
                            }
                        }
                    }
                ]
            }
        ]
    }
};


// 官网：https://www.npmjs.com/package/postcss-loader