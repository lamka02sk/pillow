const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: {

        bundle: './app/bundle.js',
        pillow: './app/app.js',
        theme: './app/theme.js'

    },

    output: {

        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        library: "Pillow",
        libraryTarget: "umd"

    },

    module: {

        rules: [

            {

                // Transpile JS
                test: /\.js$/,
                include: [ path.resolve(__dirname, './app') ],
                use: [

                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }

                ]

            },

            {

                // Transpile Sass to CSS
                test: /\.sass$/,
                include: [ path.resolve(__dirname, './styles') ],
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]

            },

            {
                // SVG
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            },

            {
                // Pug
                test: /\.pug$/,
                loader: ['raw-loader', 'pug-html-loader']
            }

        ]

    },

    plugins: [

        new webpack.optimize.UglifyJsPlugin({

            output: {
                comments: false,
                beautify: false
            }

        })

    ]

};