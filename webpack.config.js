const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    //һ�����
    //entry: './src/main.js',
    //�����
    entry: {
        index:'./src/index.js',
        my:'./src/my.js',
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        //filename: 'bundle.js',
        //��ҳ����
        filename: '[name].js',

        publicPath:"/"
    },
    //watch:true,
    //mode: 'development',
    mode: 'production',
    devServer: {
        open: true,
        //contentBase: './src',
        port: '8080',
        hot: true,
        compress: true,
        //config:'webpack.config.js'

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: path.join(__dirname,'assets'),
                to: 'assets' }

        ]),
        new webpack.BannerPlugin('zhangyong')
    ],
    module: {
        rules: [
            { test: /\.css$/, use:[  'style-loader','css-loader'] },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.s(a|c)ss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(jpg|jpeg|png|bmp|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:5*1024,
                        outputPath:'images',
                        name:'[name]-[hash:6].[ext]'
                    }
                }
            },
            {
                test:/\.(woff|woff2|eot|svg|ttf)$/,
                use:'url-loader'
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    //options:{
                    //    presets:['@babel/env'],
                    //    plugins:[
                    //        '@babel/plugin-proposal-class-properties',
                    //        [
                    //            "@babel/plugin-transform-runtime",
                    //            {
                    //                "absoluteRuntime": false,
                    //                "corejs": false,
                    //                "helpers": true,
                    //                "regenerator": true,
                    //                "useESModules": false
                    //            }
                    //        ]
                    //    ]
                    //}
                },
                exclude:/node_modules/
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }

        ]
    }
}