'use strict';

var _ = require('lodash');
var through = require('through2');

var defaultOpts = {};

module.exports = function(opts) {
  opts = _.defaults(opts, defaultOpts);
  return through.obj(function(file, encoding, callback) {
    // your logic here
    callback(null, file);
  }, function(done) {
    // your logic here
    done();
  });
};
