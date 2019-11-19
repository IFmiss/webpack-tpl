const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HappyPack = require('happypack')
const AutoDllPlugin = require('autodll-webpack-plugin')
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
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'happypack/loader?id=js'
        ]
      },
      {
        test: /\.ts$/,
        use: [
          'happypack/loader?id=js',
          'happypack/loader?id=ts'
        ]
      },
    ],
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
    }),

    // happyPack
    new HappyPack({
      id: 'js',
      loaders: [
        'cache-loader',
        {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
            cacheDirectory: true,
          },
          exclude: /node_modules/,
        }
      ],
      verbose: true,
    }),

    new HappyPack({
      id: 'ts',
      loaders: [
        'cache-loader',
        "ts-loader?" + JSON.stringify({happyPackMode: true})
      ],
      verbose: true,
    }),

    new AutoDllPlugin({
      inject: true,
      filename: '[name][hash:8].js',
      entry: {
        vendor: [
          'd-utils'
        ]
      }
    })
  ]
});