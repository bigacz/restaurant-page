const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',  
            }            
        ],
    },
    optimization: {
        minimizer: [
        "...",
        new ImageMinimizerPlugin({
            minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
                // Svgo configuration here https://github.com/svg/svgo#configuration
                [
                    "svgo",
                    {
                    plugins: [
                        {
                        name: "preset-default",
                        params: {
                            overrides: {
                            removeViewBox: false,
                            addAttributesToSVGElement: {
                                params: {
                                attributes: [
                                    { xmlns: "http://www.w3.org/2000/svg" },
                                ],
                                },
                            },
                            },
                        },
                        },
                    ],
                    },
                ],
                ],
            },
            },
        }),
        ],
    },
    };