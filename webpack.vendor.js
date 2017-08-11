var webpack = require('webpack');
var path = require("path");

console.log(path.resolve(__dirname,'..'));

module.exports = {
    entry: {

        vendor: ["react","react-dom","react-router-dom","redux","react-redux","react-router"]
    },
    output: {
        path: path.join(__dirname, "js"),
        filename: "[name].js",
        library: "[name]_[hash]"

    },
    context: __dirname,
    plugins: [
        new webpack.DllPlugin({
            context:path.join(__dirname,".."),
            path: path.join(__dirname, "js", "[name]-manifest.json"),
            name: "[name]_[hash]"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },


};
