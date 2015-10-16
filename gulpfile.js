var gulp = require('gulp');
var connect = require('gulp-connect');
var wiredep = require('wiredep');

gulp.task('serve', function() {
  connect.server({
    livereload: true,
    port: 8000
  });
});

gulp.task('wiredep', function() {
  wiredep({
    src: './index.html'
  });
});