'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

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

const entries = getEntries('gui/package/*/index.jsx');

Object.keys(entries).forEach(function (name) {
    webpackConfig.entry[name] = entries[name];
    const plugin = new HtmlWebpackPlugin({
        filename: name + '.html',
        template: 'gui/package/' + name + '/index.html',
        chunks: [name]
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
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/chunk.[id].js',
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
                            outputPath:'static/media/'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath:'static/media/'
                    }
                }]
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
        new ExtractTextPlugin("static/css/[name].css"),
        ...webpackConfig.plugins,
        new ProgressBarPlugin(),
        new WatchMissingNodeModulesPlugin(path.resolve('node_modules'))

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
