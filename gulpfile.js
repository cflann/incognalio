var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
// var watch = require('gulp-watch');

gulp.task('browserify', function(){
  var b = browserify();
  b.add('./src/inject/inject.js');
  return b.bundle()
    .pipe(source('inject.js'))
    .pipe(gulp.dest('./dist'));
});

// gulp.task('watch', function () {
//   gulp.src('src/inject/**/*.js')
//     .pipe(watch('src/inject/**/*.js'))
//     .pipe(browserify());
// });
