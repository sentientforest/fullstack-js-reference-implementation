'use strict';

var index = require('./controllers'),
  express = require('express'),
  bodyParser  = require('body-parser'),
  countries = require('./controllers/countries');

/**
 * Application routes
 */
module.exports = function(app) {
  // login calls
  // todo: implement login, authorization

  app.route('/api/countries')
    .get(countries.countriesFindAll);
  app.route('/api/countries')
    .post(countries.saveCountry);
  app.route('/api/countries/:code')
    .put(countries.saveCountry);
  app.route('/api/countries/:code')
    .patch(countries.saveCountry);
  app.route('/api/countries/:code')
    .get(countries.findCountry);
  app.route('/api/countries/:code')
    .delete(countries.deleteCountry);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( index.index);
};
