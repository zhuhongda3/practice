var gulp = require('gulp');

gulp.task('css', function () {
  var postcss = require('gulp-postcss');
  var sourcemaps = require('gulp-sourcemaps');
  var postcssPresetEnv = require('postcss-preset-env');

  return gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('precss'), 
      require('autoprefixer'),
      require('cssnano'),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'));
});