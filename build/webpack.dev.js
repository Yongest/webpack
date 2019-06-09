const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpack = require('webpack')

module.exports = merge(baseConfig,{
    devtool: 'cheap-module-eval-source-map',
    //watch:true,
    //mode: 'development',
    mode: 'development',
    devServer: {
        open: true,
        //contentBase: './src',
        port: '8081',
        hot: true,
        compress: true,
        proxy: {
            '/api': 'http://localhost:3000'
        }
        //config:'webpack.base.js'
    },
    plugins:[
        new webpack.DefinePlugin({
            IS_DEV:"true"
        })
    ]
})
