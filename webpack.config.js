<<<<<<< HEAD
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/client/index.js",
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]

    }
}
||||||| ed2b1cc
=======
const path = require('path') 
const webpack = require('webpack')

module.exports = {

}
>>>>>>> dbbe38029a3c5236888a192ea7002253ed20953e
