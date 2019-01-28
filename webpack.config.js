const dev = require('./webpack.dev')
const prod = require('./webpack.prod')
const chalk = require('chalk');
var os = require('os');

switch (process.env.NODE_ENV) {
	case 'development':
		module.exports = dev
		break
	case 'production':
		module.exports = prod
		break
}

// 获取Ip
function getIPAdress() {
	let localIPAddress = "";
	let interfaces = os.networkInterfaces();
	for (let devName in interfaces) {
			let iface = interfaces[devName];
			for (let i = 0; i < iface.length; i++) {
					let alias = iface[i];
					if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
							localIPAddress = alias.address;
					}
			}
	}
	localIp = localIPAddress;
	return localIPAddress;
}

// 打印返回信息
if (process.env.NODE_ENV === 'development') {
	let host = dev.devServer.host ? dev.devServer.host : 'localhost'
	// getIPAdress
	if (host === '0.0.0.0') host = getIPAdress()
	const text = `server will start at： http://${host}:${dev.devServer.port}`
	console.log(chalk.green(text))
}