const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.tsx'),
	devtool: false,
	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: '[name]_bundle.js',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
		},
		extensions: ['.tsx', '.json', '.js', '.jsx'],
	},
    module: {
        rules: [
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        ],
    },
};