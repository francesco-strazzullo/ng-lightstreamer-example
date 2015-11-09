var gulp = require('gulp');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var wiredep = require('wiredep');
var angularFilesort = require('gulp-angular-filesort');
var gulpSequence = require('gulp-sequence');

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

  var sources = gulp.src(['src/**/*.js']).pipe(angularFilesort());

  var options = {
    relative: true
  };

  gulp.src('index.html').pipe(inject(sources, options)).pipe(gulp.dest('.'));
});

gulp.task('run', gulpSequence('wiredep', 'serve'));