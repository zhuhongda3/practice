var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

 /**
 * outputStyle
 * 嵌套(默认):nested
 * 展开:expanded
 * 紧凑:compact
 * 压缩:compressed
 */

/**
 * 模拟嵌套语法:precss
 * 下一代CSS:postcss-preset-env
 * 浏览器前缀:autoprefixer
 */

gulp.task('scss', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ 
      outputStyle: "compact"
     }).on("error", sass.logError))
    .pipe(postcss([
      require('autoprefixer'),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'));
});

// gulp.task('css', function () {
//   return gulp.src('src/**/*.css')
//     .pipe(sourcemaps.init())
//     .pipe(postcss([
//       require('precss'),
//       // require('postcss-preset-env'),
//       require('autoprefixer'),
//     ]))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('build/'));
// });