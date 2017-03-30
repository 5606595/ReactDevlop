/**
 * Created by xiawei05 on 17/3/27.
 */
var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var TransferWebpackPlugin = require('transfer-webpack-plugin');
const autoprefixer = require('autoprefixer');
const nodeModulePath = __dirname + "/node_modules";

module.exports = {
    entry: {
        "index": "./index.html",
        "js/main": "./main.js"
    },

    plugins: [
        new ExtractTextPlugin("[name].html"),
        // new TransferWebpackPlugin([
        //     { from: 'img', to: 'img' }
        // ]),
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
            { test: /\.css$/, loader: 'style-loader!css-loader?module!postcss-loader'},
            { test: /\.less$/, loader: 'style-loader!css-loader?module!postcss-loader!less-loader' },
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
    resolve: {
        extensions: [".js", ".less", ".css", "png", "jpg", "jpeg"],
        alias: {
            'react': path.join(nodeModulePath, 'react/dist/react.js'),
            'react-router': path.join(nodeModulePath, 'react-router/lib/index.js'),
            'react-dom': path.join(nodeModulePath, 'react-dom/dist/react-dom.js'),
            'redux': path.join(nodeModulePath, 'redux/dist/redux.js'),
            'react-redux': path.join(nodeModulePath, 'react-redux/dist/react-redux.js'),
            'react-router-redux': path.join(nodeModulePath, 'react-router-redux/dist/ReactRouterRedux.js')
        }
    },

    output: {
        path: __dirname + '/build/',
        publicPath: "/",
        filename: "[name].js",
    },

    watch: false
}