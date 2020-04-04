"use strict"

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require("gulp-concat"),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    ext_replace = require('gulp-ext-replace'),
    minifyCss = require("gulp-clean-css"),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    ejs = require('gulp-ejs');

gulp.task('sass', () =>
    gulp.src('./sass/*.scss')
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],   
        cascade: false,                   
        remove:true                      
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true})) 
);

gulp.task('cssmin',['sass'],()=>
    gulp.src(['./css/*.css','!./css/*.min.css'])
    .pipe(minifyCss())
    .pipe(ext_replace('.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true})) 
);

gulp.task('uglify', () =>
    gulp.src(['./js/*.js','!./js/*.min.js'])
    .pipe(uglify())
    .pipe(ext_replace('.min.js'))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({stream:true}))
);

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./"  
        }
    });
    gulp.watch('./*.html').on('change', reload);
    gulp.watch('./sass/*.scss', ['cssmin']);
    gulp.watch(['./js/*.js','!./js/*.min.js'], ['uglify']);
});

gulp.task('default', ['watch']);        