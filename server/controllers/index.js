'use strict';

var path = require('path');

/**
 * Send partial, or 404 if it doesn't exist
 */
exports.partials = function(req, res) {
  var stripped = req.url.split('.')[0];
  var requestedView = path.join('./', stripped);
  res.render(requestedView, function(err, html) {
    if(err) {
      res.status(404);
      res.send(404);
    } else {
      res.send(html);
    }
  });
};

/**
 * Send our single page app
 */
exports.index = function(req, res) {
  res.render('index', function(err, html) {
    if (err) {
      res.sendStatus(404);
    } else if (process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'localprod') {
      // set prod GA key
      html = html.replace(/UA-/g, 'UA-'); // todo: set GA tag codes
      html = html.replace(/GTM-/g, 'GTM-');
      res.send(html);
    } else {
      res.send(html);
    }
  });
};
