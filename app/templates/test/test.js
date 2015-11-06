'use strict';
require('should');
var path = require('path');
var Promise = require('promise');
var runSeq = require('run-sequence');
var CWD = process.cwd();
var testPath = path.join(CWD, 'test');

function runTest(testCase) {
  var casePath = path.join(testPath, testCase.name);
  return new Promise(resolve => {
    process.chdir(casePath);
    let gulpInst = require(path.join(casePath, 'gulpfile'));
    runSeq.use(gulpInst)('default', () => {
      process.chdir(CWD);
      resolve();
    });
  });
}

var Cases = [{
  desc: 'description of case1',
  name: 'case1'
}, {
  desc: 'description of case2',
  name: 'case2'
}];

var chain = Promise.resolve();

Cases.forEach(function(testCase) {
  chain = chain.then(function() {
    runTest(testCase);
  });
});

chain.then(function() {
  describe('...', function() {
    Cases.map(function(testCase) {
      it(testCase.desc, function() {
        // ...
      });
    });
  });
  run();
});
