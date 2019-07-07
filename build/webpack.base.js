const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    //һ�����
    //entry: './src/main.js',
    //�����
    entry: {
        index:'./src/index.js',
        my:'./src/my.js',
    },

    output: {
        path: path.join(__dirname, '../dist'),
        //filename: 'bundle.js',
        //��ҳ����
        filename: '[name].bundle.js',

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
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            // chunkFilename: '[id].css',
          }),
    ],
    module: {
        noParse:/jquery/,
        rules: [
            // { test: /\.css$/, use:[  'style-loader','css-loader'] },
            { test: /\.css$/, use:[ MiniCssExtractPlugin.loader,'css-loader','postcss-loader'] },
            {
                test:/\.less$/,
                // use:['style-loader','css-loader','less-loader']
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
            },
            {
                test:/\.s(a|c)ss$/,
                // use:['style-loader','css-loader','sass-loader']
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']
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
                exclude:/node_modules/,
                include:path.join(__dirname,'../src')
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    }
}