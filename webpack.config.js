var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	PathRewriterPlugin = require('webpack-path-rewriter');

var siteTitle = 'Lullaby';

module.exports = {
	// entry: [
	// 	'webpack-dev-server/client?http://127.0.0.1:3000/',
	// 	'webpack/hot/only-dev-server',
	// 	'./src/main.js'
	// ],
	entry: {
    buddle: './src/main.js'
  },
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[hash].[name].js',
		hash: true
		// publicPath: '/assets/'
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	title: 'Test',
		// 	filename: 'index.html',
		// 	template: './assets/index.html',
		// 	inject: true,
		// 	// hash: true
		// }),
		new CleanWebpackPlugin(['dist'], {
			root: '',
			verbose: true,
			dry: false
		}),
		new PathRewriterPlugin()
	],
	module: {
		loaders: [
			{
				test: [/\.less$/, /\.css$/],
				loader: 'style!css!autoprefixer!less'
			},
			{
				test: [/\.js$/, /\.jsx$/],
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?name=[name][chuckhash].[ext]'
			},
			{
				test: /\.jade$/,
				loader: PathRewriterPlugin.rewriteAndEmit({
	        name: '[path][name].html',
	        loader: 'jade-html?pretty=true&title=' + siteTitle
	      })
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.less', '.css', '.jade'],
		alias: {
			'index': path.join(__dirname, '/assets/index.jade')   // 必须加__dirname，否则会当成相对路径从引用处位置开始查找
		}
	}
	// plugins: [
	// 	new webpack.HotModuleReplacementPlugin(),
	// 	new webpack.NoErrorsPlugin(),
	// 	new webpack.optimize.CommonsChunkPlugin('./common/util.js'),
	// 	new webpack.DefinePlugin({
	// 		'process.env.NODE_ENV': JSON.stringify('production'),
	// 		'__DEV__': JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
	// 		'__PRERELEASE__': JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
	// 	})
	// ]
};
