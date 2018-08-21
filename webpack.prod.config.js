'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    entry: webpackConfig.entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: 'static/js/chunk.[chunkhash:5].js',
        filename: 'static/js/[name].js',
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
                        presets: [['env', {'targets': {'electron': '2.0'}}], 'es2015', 'react', 'stage-0'],
                        plugins: [
                            ['import', [
                                {'libraryName': 'antd', 'style': 'css'},
                                {'libraryName': 'antd-mobile', 'style': 'css'}
                            ]],
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
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }, {
                        loader: "less-loader"
                    }]
                })
            },
            {
                test: /\.less/,
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'gui/assets')],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }]
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {NODE_ENV: JSON.stringify("production")}
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8
            }
        }),
        new ExtractTextPlugin("static/css/[contenthash:5].css"),
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
        sequelize: 'sequelize',
        sqlite3: 'sqlite3'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {'targets': {'electron': '2.0'}}], 'es2015', 'stage-0']
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
            "process.env": {NODE_ENV: JSON.stringify("production")}
        }),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8
            }
        }),
        new CopyWebpackPlugin([{
            from: "templates/package.json",
            to: "../",
            force: true
        }, {
            from: "templates/index.js",
            to: "../",
            force: true
        }, {
            from: "app/resources",
            to: "./resources",
            force: true
        }]),
        new ProgressBarPlugin()
    ],
    node: {
        __filename: false,
        __dirname: false
    },
    target: 'electron-main'
};

module.exports = [clientConfig, serverConfig];
