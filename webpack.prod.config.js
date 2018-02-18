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
        chunks: [name]
    });
    webpackConfig.plugins.push(plugin);
})

const clientConfig = {
    entry: webpackConfig.entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/chunk.[id].js',
        publicPath: './'
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
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8,
                compress: {
                    warnings: false,
                    comparisons: false
                },
                output: {
                    ascii_only: true,
                    comments: false
                },
                warnings: false
            }
        }),
        new ExtractTextPlugin("static/css/[name].css"),
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

const serverConfig = {
    entry: {
        main: path.resolve(__dirname, 'app/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist/app'),
        filename: '[name].js',
        publicPath: '/'
    },
    externals: {
        sqlite3: 'sqlite3',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0'],
                        plugins: ['transform-object-assign']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8,
                compress: {
                    warnings: false,
                    comparisons: false
                },
                output: {
                    ascii_only: true,
                    comments: false
                },
                warnings: false
            }
        }),
        new ProgressBarPlugin()
    ],
    node: {
        __filename: false,
        __dirname: false
    },
    target: 'electron-main'
};

module.exports = [clientConfig, serverConfig];
