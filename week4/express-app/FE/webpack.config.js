const path = require("path");
const webpack = require("webpack");
const DIST_DIR = path.join(__dirname, "../public");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
  });

module.exports = {
    entry: {
        'index': "./src/index.jsx"
    },
    output: {
        path: DIST_DIR,
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
        new UglifyJSPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2015',
                                "preact"
                            ],
                            plugins: [
                                [
                                    "transform-class-properties",
                                    'transform-react-jsx',
                                    { pragma: 'h' },
                                ]
                            ]
                        }
                    }
                ]
            }
        ]
    }
    , resolve: {
        extensions: ['.jsx', '.js']
    }
};