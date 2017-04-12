/**
 * Created by programer on 1/29/17.
 */
let webpack = require('webpack');
let path = require('path');
let NODE_MODULES = path.join(__dirname, './node_modules');

module.exports={

    entry:'./index.js',
    output:{
        path:'./public/js/',
        filename:'bundle.js'
    },
    resolve:{
        root:[NODE_MODULES]
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel',
                query:{
                    presets:['es2015','react']
                },
            },
            {
                test: /\.css/,
                loaders: ['style', 'css']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ comments: false,}) //minify everything
    ],

}