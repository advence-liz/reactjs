var webpack = require('webpack');
var path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin');
//  CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

console.log(path.join(__dirname,"..",".."));
module.exports = {
    entry: {
        bundle: "./src/index.js",

        //   vendor: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        // library: "[name]_[hash]"
        // chunkFilename: '[name]-[id].js',
        // library: "$d",
        // publicPath: "../build/"

    },

    module: {
        rules: [
            // {
            //     test: /\.jsx$/,
            //     enforce: "pre",
            //     loader: "eslint-loader"
            // },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-2']

                        }
                    }

                ]
            }
        ]

    },
    context: __dirname,
    devtool: "source-map",
    target: "web",
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)
        modules: [
            "node_modules",
            path.resolve(__dirname, "node_modules")
        ],
        // directories where to look for modules
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template/_layout.html'
        }),

        new webpack.DllReferencePlugin({
            context:path.resolve(__dirname,".."),
            manifest: require('./js/vendor-manifest.json'),
        })
        /**
         *引入vendor 引入第三方库（node_modules)的时候，不依赖 CommonsChunkPlugin插件也有效自己定义的文件入口不行
         */
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",

        //     // filename: "vendor.js"
        //     // (Give the chunk a different name)

        //     minChunks: Infinity,
        //     // (with more entries, this ensures that no other module
        //     //  goes into the vendor chunk)
        // })
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
        'react-router': 'ReactRouter',
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }

};
