const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const mode = process.env.MODE;


let plugins = [
	new webpack.DllReferencePlugin({
    	manifest: require('./modules.manifest.json')
    }),
    new MiniCssExtractPlugin({
      filename: (mode == 'development') ? "./css/[name].css" : './css/[name].[hash].css',
      chunkFilename: (mode == 'development') ? "./css/[id].css": './css/[id].[hash].css'
      //  filename: "css/[name].css",
      // chunkFilename: "css/[id].css"
    })
];

if (mode == 'production'){
	plugins.push(
		new cleanWebpackPlugin(['dist'],{
			root: __dirname,
		})
	)
}

module.exports = {
	mode: mode,
	entry:{
		home: path.resolve(__dirname, 'src/entries/index.js')
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: (mode == 'development') ? './js/[name].js' : './js/[name].[hash].js'
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
			use: [
				(mode == 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader'
			]
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
	plugins: plugins,
	optimization:{
		minimizer: [
			new OptimizeCSSAssetsPlugin({}),
			new UglifyJsPlugin({
        		cache: true,
        		parallel: true,
        		sourceMap: true // set to true if you want JS source maps
      		})
		]
	}
}


