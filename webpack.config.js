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
                    plugins: [["@babel/plugin-proposal-class-properties"], "dynamic-import-webpack"]
                }
            },
            {
                test: /\.(less|css)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]___[hash:base64:5]",
                                mode: "global"
                            }
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.(eot|svg|otf|ttf|woff|woff2|jpg|png|jpeg|gif)$/,
                use: "file-loader"
            },
            {
                test: /\.(html)$/,
                include: [path.resolve(__dirname, "src/html")],
                use: {
                    loader: "html-loader",
                    options: {
                        // attrs: [":data-src"]
                    }
                }
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "./",
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"
    },
    optimization: {
        minimize: true,

        splitChunks: {
            chunks: "all"
        }
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
            template: path.resolve("./public/index.html"),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        })
    ]
};
