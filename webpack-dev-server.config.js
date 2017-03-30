/**
 * Created by xiawei05 on 17/3/30.
 */
var webpack = require('webpack');
var conf=require("./webpack.config");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
conf.plugins = [
        new ExtractTextPlugin("[name].html"),
        // new TransferWebpackPlugin([
        //     { from: 'img', to: 'img' }
        // ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"development"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [autoprefixer]
                }
            }
        })
    ]
conf.devtool = "eval-source-map"
module.exports=conf;
