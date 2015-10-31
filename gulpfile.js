var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var wiredep = require('wiredep').stream;

gulp.task('browserSync', function() {
  browserSync({
    proxy: "localhost:7000"
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

gulp.task('watch', ['browserSync', 'controllers', 'services'], function() {
  gulp.watch('public/css/*.css', browserSync.reload);
  gulp.watch('public/js/*.js', browserSync.reload);
  gulp.watch('public/*.html', browserSync.reload);
});
