var gulp = require('gulp');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
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

  var sources = gulp.src(
    ['src/**/*.js'], {
      read: false
    }
  );

  var options = {
    relative: true
  };

  gulp.src('index.html').pipe(inject(sources, options)).pipe(gulp.dest('.'));
});