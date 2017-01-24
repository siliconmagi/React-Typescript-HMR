const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const opener = require('opener');
const config = require('./webpack.config.js');
const host = 'localhost';
const port = 3000;

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  contentBase: './src',
  stats: {
    colors: true,
  },
})
  .listen(port, host, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Listening at ${host}:${port}`);
    opener(`http://${host}:${port}`);
  });
