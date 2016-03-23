'use strict';
const gulp = require('gulp');
const plugin = require('../../lib/index');
const del = require('del');

gulp.task('clean', cb => del('build', cb));

gulp.task('default', ['clean'], () => {
  return gulp.src('src/**/*')
    // ...
    .pipe(plugin({
      // options here
    }))
    // ...
    .pipe(gulp.dest('build'));
});
