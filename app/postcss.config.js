module.exports = {
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
            }
        ]
    }
}


// 官网：https://www.npmjs.com/package/postcss-loader