const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    // mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [["@babel/plugin-proposal-class-properties"]]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(eot|svg|otf|ttf|woff|woff2|jpg|png|jpeg)$/,
                use: "file-loader"
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "./",
        filename: "bundle.js"
    },
    devServer: {
        publicPath: "/",
        contentBase: "./dist",
        // proxy: {
        //     "/api": "http://localhost:5000"
        // }
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "http://localhost:5000"
            }
        }
    },
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve("./public/index.html")
        })
    ]
};
