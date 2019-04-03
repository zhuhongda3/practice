// tsify是Browserify的一个插件，就像gulp-typescript一样，它能够访问TypeScript编译器。 
// vinyl-source-stream会将Browserify的输出文件适配成gulp能够解析的格式，它叫做 vinyl
// Babel是个十分灵活的编译器，将ES2015及以上版本的代码转换成ES5和ES3。 你可以添加大量自定义的TypeScript目前不支持的转换器。
// Uglify帮你压缩代码，将花费更少的时间去下载它们。
// 为Broswerify指定了debug: true。 这会让 tsify在输出文件里生成source maps(隐式)
// 因为Uglify是用于混淆你的代码，所以我们还要安装vinyl-buffer和gulp-sourcemaps来支持sourcemaps
// Babelify也会混淆代码，因此我们也需要vinyl-buffer和gulp-sourcemaps（在输出文件里生成source maps(显式)）  -https://github.com/babel/babelify
// vinyl-buffer Convert streaming vinyl files to use buffers

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
    pages: ['src/*.html']
};

gulp.task('copyHtml', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyHtml'], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});