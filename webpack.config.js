const dev = require('./webpack.dev')
const prod = require('./webpack.prod')
// const common = require('./webpack.common')
// console.log(dev)
console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
	case 'development':
		module.exports = dev
		break
	case 'production':
		module.exports = prod
		break
}
