var gulp = require("gulp"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  clean = require("gulp-clean"),
  minifyCss = require("gulp-clean-css"),
  // minifyHtml = require("gulp-minify-html"),
  sourcemaps = require("gulp-sourcemaps"),
  postcss = require("gulp-postcss"),
  sass = require("gulp-sass"),
  babel = require("gulp-babel"),
  fileinclude = require("gulp-file-include"),
  // eslint = require("gulp-eslint"),
  browserSync = require("browser-sync").create(),
  config = require("./config");

gulp.task("clean", function() {
  gulp.src(config.build, { read: false }).pipe(clean({ force: true }));
  gulp.src(config.dest, { read: false }).pipe(clean({ force: true }));
});

gulp.task("copy", function() {
  gulp.src(config.static.srcPath).pipe(gulp.dest(config.static.devPath));
  gulp.src(config.static.srcPath).pipe(gulp.dest(config.static.prdPath));
});

gulp.task("html", function() {
  gulp
    .src(config.html.srcPath)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(gulp.dest(config.html.devPath))
    .pipe(gulp.dest(config.html.prdPath))
    .pipe(browserSync.reload({ stream: true }));
});

// gulp.task("lint", () => {
//   // gulp.src(['**/*.js','!node_modules/**'])
//   return gulp
//     .src(config.js.url)
//     .pipe(eslint())
//     .pipe(eslint.format())
//     .pipe(eslint.failAfterError());
// });

gulp.task("css", ["css-minify"], function() {
  return gulp
    .src(config.css.srcPath)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(postcss([require("autoprefixer")]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.css.devPath))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("css-minify", function() {
  return gulp
    .src(config.css.srcPath)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(postcss([require("precss"), require("autoprefixer")]))
    .pipe(minifyCss())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.css.prdPath))
    .pipe(browserSync.reload({ stream: true }));
});

// "lint", 
gulp.task("js", ["js-minify"], function() {   
  gulp
    .src(config.js.srcPath)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.js.devPath))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("js-minify", function() {
  gulp
    .src(config.js.srcPath)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.js.prdPath))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: config.html.devPath
    }
  });
  gulp.watch([config.html.srcPath, config.html.project+'/layout/*.html'], ["html"]);
  gulp.watch(config.src+'/sass/**/*.scss', ["css"]);
  gulp.watch(config.js.srcPath, ["js"]);
});

gulp.task("default", function() {
  gulp.start('html','css','js','copy','watch');
});
