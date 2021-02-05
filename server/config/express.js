'use strict';

var express = require('express'),
    favicon = require('serve-favicon'),
    compression = require('compression'),
    morgan,
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    errorHandler = require('errorhandler'),
    path = require('path'),
    config = require('./config');

/**
 * Express configuration
 */
module.exports = function(app) {
  var env = app.get('env');

  if (env === 'development' || env === 'localdev' || env === 'qa') {
    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.endsWith('.js') || req.url.endsWith('.css') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });
  }

  if (env === 'production' || env === 'localprod') {
    app.use(compression());
    app.use(favicon(path.join(config.root, '/angular-client/build', 'favicon.ico')));
  }

  app.use(express.static(path.join(config.root, '/angular-client/build')));
  app.set('views', config.root + '/angular-client/build');

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  if (env === 'development' || 'localdev' || 'localprod') {
    morgan = require('morgan');
    app.use(morgan('dev'));
  }
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json({ extended: false }));

  // Error handler - has to be last
  if (env === 'development' || env === 'localdev' || env === 'localprod') {
    app.use(errorHandler());
  }
};
