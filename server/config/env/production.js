'use strict';

module.exports = {
  env: 'production',
  ip: process.env.OPENSHIFT_NODEJS_IP ||
    process.env.IP ||
    '0.0.0.0',
  port: process.env.OPENSHIFT_NODEJS_PORT ||
    process.env.PORT ||
    5004,
  path.normalize(__dirname + '/../../logs/'),
  logLevel: process.env.NODEJS_LOG_LEVEL || 'warn',
};
