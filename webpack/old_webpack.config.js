//插件需要用 require 引入
//用的是 webpack自带的插件
let webpack = require('webpack');

module.exports ={
    entry:__dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: "build_main.js"
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true,
                            localIdentName:"[name]_[local]_[hash:base64:5]"
                        }
                    },
                ]
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
        new webpack.BannerPlugin('webpack快学完了')
    ]
}
