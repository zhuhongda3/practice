// node环境
// var gulp = require("gulp");
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");

// gulp.task("default", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("dist"));
// });

// tsify是Browserify的一个插件，就像gulp-typescript一样，它能够访问TypeScript编译器。 
// vinyl-source-stream会将Browserify的输出文件适配成gulp能够解析的格式，它叫做 vinyl
// Watchify启动Gulp并保持运行状态，当你保存文件时自动编译。 帮你进入到编辑-保存-刷新浏览器的循环中。
// Babel是个十分灵活的编译器，将ES2015及以上版本的代码转换成ES5和ES3。 你可以添加大量自定义的TypeScript目前不支持的转换器。
// Uglify帮你压缩代码，将花费更少的时间去下载它们。
// 为Broswerify指定了debug: true。 这会让 tsify在输出文件里生成source maps(隐式)

// 浏览器环境
var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task("default", ["copy-html"], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);