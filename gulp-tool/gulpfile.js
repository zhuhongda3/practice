const gulp = require("gulp"),
  // concat = require("gulp-concat"),
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
  eslint = require("gulp-eslint"),
  browserSync = require("browser-sync").create(),
  config = require("./config");

gulp.task("clean", function() {
  return gulp.src(config.build, { read: false }).pipe(clean({ force: true }));
});

gulp.task("copy", function() {
  gulp.src(config.static.url).pipe(gulp.dest(config.static.url2));
});

gulp.task("html", function() {
  gulp
    .src(config.html.url) //['index.html']
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(gulp.dest(config.html.url2))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("lint", () => {
  // gulp.src(['**/*.js','!node_modules/**'])
  return gulp
    .src(config.js.url)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("css", ["css-minify"], function() {
  return gulp
    .src(config.css.url)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(postcss([require("precss"), require("autoprefixer")]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.css.url2))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("css-minify", function() {
  return gulp
    .src(config.css.url)
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
    .pipe(gulp.dest(config.css.url2))
    .pipe(browserSync.reload({ stream: true }));
});

// "lint", 
gulp.task("js", ["js-minify"], function() {   
  gulp
    .src(config.js.url)
    .pipe(babel())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.js.url2))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("js-minify", function() {
  gulp
    .src(config.js.url)
    .pipe(babel())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.js.url2))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", function() {
  // browserSync.init({
  //   server: {
  //     baseDir: config.build
  //   }
  // });
  gulp.watch([config.html.url, config.html.url3], ["html"]);
  gulp.watch(config.css.url3, ["css"]);
  // "lint", 
  gulp.watch(config.js.url, ["js"]);
});

gulp.task("default", ["clean"], function() {
  gulp.start('copy','html','css','js','watch');
});
