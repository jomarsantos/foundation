const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();
const path = require('path')

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));
app.use(express.static(__dirname + '/www'));

app.get('/*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
