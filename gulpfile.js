var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var wiredep = require('wiredep').stream;
var config = require('./config');

gulp.task('bower', function() {
  gulp.src('public/app/index.html')
    .pipe(wiredep({
      directory: 'public/bower_components'
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('browserSync', function() {
  browserSync({
    proxy: "localhost:" + config.PORT
  });
});

gulp.task('controllers', function() {
  return gulp.src('./public/app/controllers/*.js')
    .pipe(concat('controllers.js'))
    .pipe(gulp.dest('./public/app/controllers'));
});

gulp.task('services', function() {
  return gulp.src('./public/app/services/*.js')
    .pipe(concat('services.js'))
    .pipe(gulp.dest('./public/app/services'));
})

gulp.task('watch', ['browserSync', 'controllers', 'services', 'bower'], function() {
  gulp.watch('public/css/*.css', browserSync.reload);
  gulp.watch('public/js/*.js', browserSync.reload);
  gulp.watch('public/*.html', browserSync.reload);
});
