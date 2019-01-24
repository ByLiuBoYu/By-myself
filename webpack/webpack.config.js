const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode:'development',
    entry:{
        'xx':'./src/index.js'
        // 给文件起的名字：‘具体路径’
    },
    output:{
        
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            // minify:{
            //     removeAttributeQuotes:true
            // },
            hash:true,
            template:'./src/text.html',
            filename:'test.html'
        }),
        new ExtractTextPlugin('./index.css')
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        // 设置基本目录结构
        host:'localhost',
        // 服务器IP地址，可以使用IP或者localhost
        compress:true,
        // 是否压缩
        port:8081,
        // 端口号
        hot:true,
    }
}