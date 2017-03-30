/**
 * Created by xiawei05 on 17/3/27.
 */
var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        "index": "./index.html",
        "js/main": "./main.js"
    },

    plugins: [
        new ExtractTextPlugin("[name].html"),
        new TransferWebpackPlugin([
            { from: 'img', to: 'img' }
        ]),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [autoprefixer]
                }
            }
        })
    ],


    module: {
        loaders: [
            { test: /\.(jpg|pnf|gif)$/, loader: 'url?limit=8192' },
            { test: /\.html$/, loader: ExtractTextPlugin.extract('html-loader') },
            { test: /\.css$/, loader: 'style!css!postcss'},
            { test: /\.less$/, loader: 'style!css!postcss!less' },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            // {
            //     test: /\.svg$/,
            //     loader: 'url?limit=8192!svgo'
            // }
        ]
    },

    output: {
        path: __dirname + '/build/',
        publicPath: "/",
        filename: "[name].js",
    },

    watch: false
}