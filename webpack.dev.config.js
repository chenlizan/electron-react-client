'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const webpackConfig = {entry: {}, plugins: []};

const getEntries = (globPath) => {
    const files = glob.sync(globPath), entries = {};
    files.forEach(function (filepath) {
        const split = filepath.split('/');
        const name = split[split.length - 2];
        entries[name] = './' + filepath;
    });
    return entries;
}

const entries = getEntries('package/*/index.jsx');

Object.keys(entries).forEach(function (name) {
    webpackConfig.entry[name] = entries[name];
    const plugin = new HtmlWebpackPlugin({
        filename: name + '.html',
        template: 'package/' + name + '/index.html',
        inject: true
    });
    webpackConfig.plugins.push(plugin);
})

const clientConfig = {
    devServer: {
        open: false,
        port: 3000,
        historyApiFallback: true
    },
    devtool: 'eval-source-map',
    entry: webpackConfig.entry,
    output: {
        filename: '[name].js',
        chunkFilename: 'bundle-[chunkhash:8].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['add-module-exports',
                            'transform-object-assign',
                            'syntax-dynamic-import',
                            ['import', {
                                'libraryName': 'antd',
                                'style': 'css'
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css"),
        ...webpackConfig.plugins,
        new ProgressBarPlugin()

    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    target: 'electron-renderer'
};

module.exports = clientConfig;
