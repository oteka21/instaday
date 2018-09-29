const path = require('path');
const webpack = require('webpack');


module.exports = {
	mode: 'development',
	entry:{
		home: path.resolve(__dirname, 'src/entries/index.js')
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: './js/[name].js'
	},
	module: {
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env','@babel/preset-react'],
					plugins: ['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
				}
			}
		},
		{
			test: /\.(css|scss)$/,
			use: ['style-loader','css-loader','sass-loader']
		},
		{
			test: /\.(jpg|png|gif|svg)$/,
			use: {
				loader:'url-loader',
				options:{
					limit: 10000,
					fallback: 'file-loader',
					name: 'images/[name].[ext]'
				}	
			}
		}
		]
	},
	plugins:[
    new webpack.DllReferencePlugin({
    	manifest: require('./modules.manifest.json')
    })
  ]
}