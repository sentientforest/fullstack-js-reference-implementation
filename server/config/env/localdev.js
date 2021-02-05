'use strict';

var path = require('path');

module.exports = {
  env: 'localdev',
  ip: process.env.OPENSHIFT_NODEJS_IP ||
    process.env.IP ||
    '127.0.0.1',
  port: process.env.OPENSHIFT_NODEJS_PORT ||
    process.env.PORT ||
    9000,
  logPath: path.normalize(__dirname + '/../../logs/'),
  logLevel: process.env.NODEJS_LOG_LEVEL || 'debug',
};
