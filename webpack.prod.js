const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// css压缩打包相关
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 打包清除dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = function (dir) {
	return path.resolve(__dirname, dir);
} 
 

module.exports = merge(common, {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: resolve('dist'),
    publicPath: '',
    filename: '[name]-[hash].js'
  },
  plugins: [
    // 清除
    new CleanWebpackPlugin(['dist'], {
			verbose: false
    }),
    
    // css 压缩
    new OptimizeCssAssetsPlugin({}),
  ],
  module: {
    
  },
  optimization: {
    namedModules: true,
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
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true,
        },
        commons: {
          name: 'vendors',
          chunks: 'all',
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				}
			}
		},
	}
});