var webpack = require('webpack');
var path = require("path");



module.exports = {
    entry: {
        lib: "./lib/lib.js"
    },
    output: {
        path: path.join(__dirname, "lib"),
        filename: "[name].bundle.js"
     

    },
    context: __dirname,
    // plugins: [
    //     new webpack.DllPlugin({
    //         context:path.resolve(__dirname,"..","vender"),
    //         path: path.join(__dirname, "js", "[name]-manifest.json"),
    //         name: "[name]_[hash]"
    //     })
    // ],
    resolve: {
        extensions: [".js", ".jsx"]
    },


};
