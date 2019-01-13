const webpack = require('webpack')
const dev = require('./webpack.dev')
const prod = require('./webpack.prod')
switch (process.env.NODE_ENV) {
	case 'development':
		module.exports = dev
		break
	case 'production':
		module.exports = prod
		break
}
