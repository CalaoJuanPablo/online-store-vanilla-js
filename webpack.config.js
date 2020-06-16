const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = function webpackConfig(env) {
	let plugins = [
		// new MiniCssExtractPlugin({
		// 	filename: '/css/[name].css'
		// }),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]

	if (env.NODE_ENV === 'production') {
		plugins.push(new CleanWebpackPlugin())
	}

	return {
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'js/[name].js',
			publicPath: '/'
		},
		resolve: {
			extensions: ['.js']
		},
		mode: env.NODE_ENV,
		devServer: {
			compress: true,
			port: 3000,
			historyApiFallback: true
		},
		module: {
			rules: [
				{
					test: /\.js?$/,
					exclude: '/node_modules',
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.scss?$/,
					use: [
						// MiniCssExtractPlugin.loader,
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				}
			]
		},
		plugins,
		optimization: {
			minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})]
		}
	}
}
