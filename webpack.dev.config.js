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
};

const entries = getEntries('gui/package/*/index.jsx');

Object.keys(entries).forEach(function (name) {
    webpackConfig.entry[name] = entries[name];
    const plugin = new HtmlWebpackPlugin({
        filename: name + '.html',
        template: 'gui/package/' + name + '/index.html',
        chunks: [name]
    });
    webpackConfig.plugins.push(plugin);
});

const clientConfig = {
    devServer: {
        open: false,
        port: 3000,
        historyApiFallback: true
    },
    devtool: 'eval-source-map',
    entry: webpackConfig.entry,
    output: {
        chunkFilename: 'static/js/chunk.[chunkhash:5].js',
        filename: 'static/js/[name].js',
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
                            outputPath: 'static/media/'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/media/'
                    }
                }]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {'targets': {'electron': '3.0'}}], 'react', 'stage-0'],
                        plugins: [
                            ['import', [
                                {'libraryName': 'antd', 'style': 'css'},
                                {'libraryName': 'antd-mobile', 'style': 'css'}
                            ]], 'lodash', 'transform-decorators-legacy'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'gui/assets')],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }]
                })
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'gui/assets')],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.less$/,
                exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'gui/assets')],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }, 'less-loader']
                })
            },
            {
                test: /\.less/,
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'gui/assets')],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'gui')
        },
        extensions: ['.js', '.json', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('development')}
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('static/css/[contenthash:5].css'),
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
