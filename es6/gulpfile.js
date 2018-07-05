var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('watch', function () {
  browserSync.init({
      server: {
          baseDir: "./",
      }
  });
  gulp.watch('./demo/*.html').on('change', reload);
});

gulp.task('default', ['watch']);