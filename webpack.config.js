var path = require('path'),
    webpack = require('webpack'),
    env = process.env.NODE_ENV;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log(env);
console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_超华丽的分割线-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');

// dev
var config_dev = {
    entry: {
        index: [
            'webpack/hot/dev-server',
            path.resolve(__dirname, 'src/react/entry.js')
        ],
        vendors: [
            'react',
            'react-dom'
        ]
    }，
    output: {
        filename: 'js/[name].js',
        path: path.resolve('build'),
        publicPath: '/'
    },
    resolve: {
        root: '／src',
        extensions: ['', '.js', '.jsx', '.json', '.less']
    },
    devtool: 'eval',
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            loader: 'eslint-loader',
            include: [path.resolve(__dirname, 'src')],
            exclude: [path.resolve(__dirname, 'node_modules')]
        }],
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?sourceMap']
            },
            {
                test: /.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader?sourceMap']
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/i,
                loaders: ['url-loader?limit=15000&name=images/[name].[ext]']
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=25000'
            }
        ],
        plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')
        ],
        devServer: {
            hot: true,
            inline: true
        }
    }
};

// production
var config_prod = {
    entry: {
        index: [
            path.resolve(__dirname, 'src/react/entry.js')
        ],
        vendors: [
            'react',
            'react-dom'
        ]
    }，
    output: {
        filename: 'js/[name].js',
        path: path.resolve('build'),
        publicPath: '/'
    },
    resolve: {
        root: '／src',
        extensions: ['', '.js', '.jsx', '.json', '.less']
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /.less$/,
                loaders: ExtractTextPlugin.extract('style-loader', ['css-loader', 'less-loader'])
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/i,
                loaders: ['url-loader?limit=15000&name=images/[name].[ext]']
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=25000'
            }
        ],
        plugins: [
            new ExtractTextPlugin('css/style.css', {
                allChunk: true
            }),
            new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    }
};

module.exports = (env === 'production') ? config_prod : config_dev;