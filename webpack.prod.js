const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
// css压缩打包相关
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 打包清除dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = function (dir) {
	return path.resolve(__dirname, dir);
}
module.exports = merge(common, {
  entry: {
    app: './src/index.ts'
  },
  output: {
    path: resolve('dist'),
    publicPath: '',
    filename: 'js/[name]-[hash].js'
  },
  plugins: [
    // 清除
    new CleanWebpackPlugin(['dist'], {
			verbose: false
    }),
    
    // css 压缩
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    })
  ]
});