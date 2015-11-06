'use strict';
var Gulp = require('gulp').Gulp;
var gulp = new Gulp();
var plugin = require('../../index');
var del = require('del');

gulp.task('clean', function(cb) {
  del('build', cb);
});

gulp.task('default', ['clean'], function() {
  return gulp.src('src/**/*')
    // ...
    .pipe(plugin({
      // options here
    }))
    // ...
    .pipe(gulp.dest('build'));
});

module.exports = gulp;
