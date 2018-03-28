var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
	  { 
		test: /\.jsx?$/, 
		loader: 'babel-loader', 
		exclude: /node_modules/ 
	  },
      {
		test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
	  { 
	    test: /\.svg$/,
		loader: 'svg-loader' 
	  }
	]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
	inline:true,
    port: 3001
  }
};