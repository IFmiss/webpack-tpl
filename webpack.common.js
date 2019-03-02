const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = function (dir) {
	return path.resolve(__dirname, dir);
}

const extractCss = new ExtractTextPlugin({
  filename: "css/[name]-[hash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: resolve('dist'),
    publicPath: '',
    filename: '[name]-[hash].js'
  },
  resolve: {
		alias: {
			'src': resolve('src'),
			'script': resolve('src/script')
		}
	},
	plugins: [
		new HtmlWebpackPlugin ({
      filename: 'index.html',
      template: 'index.html',
			inject: true,
			favicon: 'src/assets/favicon/favicon.ico'
		}),

		extractCss
	],
  module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
        use: ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:["css-loader","sass-loader"]
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:["css-loader","less-loader"]
				})
			},
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:["css-loader","stylus-loader"]
				})
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: [
					{
						loader: 'url-loader'
					}
        ]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["env", "stage-2"]
					}
				}
			},
			{
				test: /\.ts$/,
				use: [
					{loader: 'babel-loader',},
					{
						loader: 'ts-loader',
						options: {
							// 加快编译速度
							transpileOnly: true,
							// 指定特定的ts编译配置，为了区分脚本的ts配置
							configFile: path.resolve(__dirname, './tsconfig.json')
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
        ]
			},
		]
	},
  optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 3,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		}
	}
};