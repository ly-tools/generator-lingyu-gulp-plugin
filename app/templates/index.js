'use strict';

const _ = require('lodash');
const through = require('through2');
const DEFAULT_OPTS = {};

module.exports = opts => {
  opts = _.defaults(opts || {}, DEFAULT_OPTS);
  return through.obj((file, encoding, callback) => {
    // your logic here
    callback(null, file);
  }, done => {
    // your logic here
    done();
  });
};
