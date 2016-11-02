const path = require('path');

const config = {
  debug: true,
  devtool: 'source-map',
  entry: {
    app: './src/ts/app.ts'
  },
  output: {
    filename: '[name].js',
    publicPath: '/bundles/',
    path: path.resolve(__dirname, './bundles')
  },
  resolve: {
    extensions: ['', '.js', 'ts']
  },
  node: {
    global: false
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src/ts')
        ]
      }
    ]
  },
  devServer: {
    progress: true,
    contentBase: path.join(__dirname, 'public'),
    filename: 'app.js',
    stats: {
      colors: true
    }
  }
};

module.exports = config;
