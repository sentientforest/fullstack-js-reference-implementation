'use strict';

var util = require('util'),
  express = require('express'),
  jwt = require('express-jwt'),
  config, registry, secretKey;

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'localdev';

config = require('./server/config/config');

secretKey = process.env.NODEJS_KEY;

if (!secretKey && process.env.NODE_ENV === 'localdev') {
  // set hard-coded secret key for local development; not for production use
  secretKey = 'test-secret-test-secret-test-secret-test-secret';
}
else if (!secretKey) {
  throw new Error('No NODEJS_KEY provided in environment. This application' +
  ' requires a secret key for signing authorization tokens. Provide the key in' +
  ' the NODEJS_KEY environment variable.');
}

// Setup Express
var app = express();

// todo: uncomment below after implementing authorization
// app.use('/api', jwt({ secret: secretKey, algorithms: ['HS256'] }));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    hwpCore.logs.log.debug({
      reqPath: req.path,
      err: err
    }, 'Handled unauthorized error');
    res.status(401).send('Authorization required')
    return
  }
  next();
});

var acah = 'Origin, X-Requested-With, Authorization, Content-Type, Accept';
if (process.env.NODE_ENV === 'localdev' || process.env.NODE_CROSS_ORIGIN === '1') {
  app.use('/', function allowXDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods',
    'POST, PUT, GET, OPTIONS, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', acah);
    next();
  });
}

require('./server/config/express')(app);
require('./server/routes')(app);

// Start server
app.listen(config.port, config.ip, function () {
  console.log('Express server listening on %s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
