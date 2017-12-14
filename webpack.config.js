const webpack = require('webpack'); 
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    output: {
        path: path.resolve('./dist'),
        filename: 'event-bus.min.js'
    }, 
    entry: path.resolve('./src/event-bus.js'),
    performance: {
        hints: false
    },
    devtool: '#eval-source-map', 
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/              
            }
        ],
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            compress: {
                warnings: false 
            }
        })
    ]
}; 