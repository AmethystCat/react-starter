var path = require('path'),
    webpack = require('webpack'),
    env = process.env.NODE_ENV;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log(env);
console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_超华丽的分割线-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_');

// dev
// var config_dev = {
//     entry: {
//         index: [
//             'webpack/hot/only-dev-server',
//             path.resolve(__dirname, 'src/entry.js')
//         ],
//         vendors: [
//             'react',
//             'react-dom'
//         ]
//     },
//     output: {
//         filename: 'js/[name].js',
//         path: path.resolve(__dirname, 'build'),
//         publicPath: '/'
//     },
//     resolve: {
//         modules: [
//             "node_modules",
//             path.resolve(__dirname, 'src') 
//         ],
//         extensions: ['', '.js', '.jsx', '.json', '.less']
//     },
//     devtool: 'eval',
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 enforce: 'pre',
//                 use: ['eslint-loader']
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader?sourceMap']
//             },
//             {
//                 test: /.less$/,
//                 use: ['style-loader', 'css-loader', 'less-loader?sourceMap']
//             },
//             {
//                 test: /\.(js|jsx)$/,
//                 use: ['react-hot-loader', 'babel-loader'],
//                 include: [path.resolve(__dirname, 'src')],
//                 exclude: [path.resolve(__dirname, 'node_modules')]
//             },
//             {
//                 test: /\.(jpg|jpeg|png|gif)$/i,
//                 use: ['url-loader?limit=15000&name=images/[name].[ext]']
//             },
//             {
//                 test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
//                 use: ['url-loader?limit=25000']
//             }
//         ],
//         plugins: [
//             // new webpack.NoErrorsPlugin(),
//             // new webpack.HotModuleReplacementPlugin(),
//             new webpack.optimize.CommonsChunkPlugin({
//                 name: 'vendors', 
//                 filename: 'js/vendors.js'
//             })
//         ]
//     },
//     // devServer: {
//     //     hot: true,
//     //     inline: true
//     // }
// };

var config_dev = {
    entry: {
        index: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://192.168.5.103:8080',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'src/entry.js')
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')]
            }
        ]
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        host: '192.168.5.103',
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'vendors', 
            //     filename: 'js/vendors.js'
            // })
        ]
};

var config_prod = {};
// production
// var config_prod = {
//     entry: {
//         index: [
//             path.resolve(__dirname, 'src/react/entry.js')
//         ],
//         vendors: [
//             'react',
//             'react-dom'
//         ]
//     },
//     output: {
//         filename: 'js/[name].js',
//         path: path.resolve('build'),
//         publicPath: '/'
//     },
//     resolve: {
//         root: '／src',
//         extensions: ['', '.js', '.jsx', '.json', '.less']
//     },
//     devtool: 'eval',
//     module: {
//         loaders: [
//             {
//                 test: /\.css$/,
//                 loaders: ExtractTextPlugin.extract('style-loader', 'css-loader')
//             },
//             {
//                 test: /.less$/,
//                 loaders: ExtractTextPlugin.extract('style-loader', ['css-loader', 'less-loader'])
//             },
//             {
//                 test: /\.(js|jsx)$/,
//                 loader: 'babel-loader',
//                 exclude: [path.resolve(__dirname, 'node_modules')]
//             },
//             {
//                 test: /\.(jpg|jpeg|png|gif)$/i,
//                 loaders: ['url-loader?limit=15000&name=images/[name].[ext]']
//             },
//             {
//                 test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
//                 loader: 'url-loader?limit=25000'
//             }
//         ],
//         plugins: [
//             new ExtractTextPlugin('css/style.css', {
//                 allChunk: true
//             }),
//             new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
//             new webpack.optimize.UglifyJsPlugin({
//                 compress: {
//                     warnings: false
//                 }
//             })
//         ]
//     }
// };

module.exports = (env === 'production') ? config_prod : config_dev;