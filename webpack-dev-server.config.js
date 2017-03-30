/**
 * Created by xiawei05 on 17/3/30.
 */
var webpack = require('webpack');
var conf=require("./webpack.config");
conf.plugins=conf.plugins.filter(plugin => {
    return !(plugin instanceof webpack.optimize.UglifyJsPlugin);
});
conf.devtool = "eval-source-map"
module.exports=conf;
