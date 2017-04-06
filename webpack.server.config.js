/**
 * Created by programer on 2/3/17.
 */

let fs = require('fs');
let path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'server.js'),

    output: {
        path:'./',
        filename: 'server.bundle.js'
    },

    target: 'node',

    // keep node_module paths out of the bundle
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server', 'react/addons',
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs2 ' + mod
        return ext
    }, {}),

    node: {
        __filename: true,
        __dirname: true
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.css/,
                loaders: ['style', 'css']
            }
        ]
    }

}
