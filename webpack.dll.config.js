const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: {
		modules: ['react','react-dom','@fortawesome/react-fontawesome','@fortawesome/free-brands-svg-icons','@fortawesome/free-regular-svg-icons']
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: './js/[name].js',
		library: '[name]'
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.join(__dirname, "[name].manifest.json")
		})
	]
}