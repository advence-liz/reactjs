var webpack = require('webpack');
var path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        index: './src'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
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
            "Tools",
            "Common",
            "docave_modules",
            "node_modules"
        ],
        alias: {
            Utilities: path.resolve(__dirname, 'JSX/Utilities/'),
            Services: path.resolve(__dirname, 'JSX/Services/'),
            Common: path.resolve(__dirname, 'JSX/Components/Common/')
        },
        // directories where to look for modules
        extensions: [".js", ".json", ".jsx", ".less"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template/_layout.html',
            favicon: "template/favicon.ico"
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false)
        })
    ],
    externals: {
        'react': ' window.React',
        'react-dom': ' window.ReactDOM',
    },
    //  externals:/^react/,
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    }

};
