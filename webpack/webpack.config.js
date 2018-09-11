//插件需要用 require 引入
//用的是 webpack自带的插件
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let UglifyJsPlugin = require('uglify-js-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports ={
    entry:__dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename: "build_main[hash].js"
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                // use:[
                //     'style-loader',
                //     {
                //         loader:'css-loader',
                //         options:{
                //             modules:true,
                //             localIdentName:"[name]_[local]_[hash:base64:5]"
                //         }
                //     },
                // ]
                // use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
                // fallback:编译后用什么loader来提取css文件
                use : ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use     :  {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                })
            },
            {
                test:/\.js$/,
                use:"babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        // 配置 url-loader 的可选项
                        options: {
                            // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                            limit: 10000,
                            // 超出限制，创建的文件格式
                            // build/images/[图片名].[hash].[图片格式]
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('webpack快学完了'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin('build/*.*', {
            // 绝对路径
            root: __dirname,
            //将日志写入控制台。
            verbose: true,
            ////使用布尔“true”来测试/模拟删除。 （不会删除文件）。
            //默认值：false - 删除文件
            dry: false
        })
    ]
}
