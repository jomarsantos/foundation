// Path
const path = require('path')

// Config
var config = require(path.resolve(__dirname, '../../config'));

// Express
const express = require('express');
const app = express();

// Webpack
const webpack = require('webpack');
const webpackConfig = require(path.resolve(__dirname, './webpack.config.js'));
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));

// Public Assets
app.use(express.static(path.resolve(__dirname, './public')));

// Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Database
var mongoose = require('mongoose');
var mongoDB = config.mongoURL;
mongoose.connect(mongoDB, {
	useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Server
var testRouter = require('./routes/testRoute.js');
var rootRouter = require('./routes/root.js');
app.use('/api/test', testRouter);
app.use('/api', rootRouter);

// Client
app.use(express.static(path.resolve(__dirname, '../client')));
app.get('/*', function response(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// Initialize
const server = app.listen(config.port, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
