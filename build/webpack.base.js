const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    //一个入口
    //entry: './src/main.js',
    //多入口
    entry: {
        index:'./src/index.js',
        my:'./src/my.js',
    },

    output: {
        path: path.join(__dirname, '../dist'),
        //filename: 'bundle.js',
        //多页出口
        filename: '[name].js',

        publicPath:"/"
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename:'my.html',
            template: './src/my.html',
            chunks:['my']
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: path.join(__dirname,'..','assets'),
                to: 'assets' }

        ]),
        new webpack.BannerPlugin('zhangyong'),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        })
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
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    }
}