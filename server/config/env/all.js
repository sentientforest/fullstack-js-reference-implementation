'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  appId: 'fullstack-server',
  root: rootPath,
  port: process.env.PORT || 9000
};
