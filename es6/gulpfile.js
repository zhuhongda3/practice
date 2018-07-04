var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('watch', function () {
  browserSync.init({
      server: {
          baseDir: "./"  
      }
  });
  gulp.watch('./*.html').on('change', reload);
  gulp.watch('./sass/**/*.scss', ['cssmin']);
  gulp.watch(['./js/*.js','!./js/*.min.js'], ['uglify']);
});

gulp.task('default', ['watch']);