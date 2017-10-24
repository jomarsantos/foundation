const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();
const path = require('path')

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));
app.use(express.static(__dirname + '/src/app'));

app.get('/*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'src/app/index.html'));
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
