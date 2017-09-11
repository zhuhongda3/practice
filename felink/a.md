1.gulp-rename的配置：
.pipe(rename({'basename': 'main.min','extname': '.js'}))
pipe(rename({'suffix': '.min'}))

2.ejs
gulp.task('ejs', function () {
    // 设置全局头部资源和尾部资源
    var data = {　　
    　　"styles": [
            "https://cdn.bootcss.com/foundation/6.4.2-rc2/css/foundation.min.css",
            "https://cdn.bootcss.com/Swiper/3.4.2/css/swiper.css",
            "/assets/css/main.css"
        ],
    　　"scripts": [
            "https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js",
            "https://cdn.bootcss.com/Swiper/3.4.2/js/swiper.min.js",
            "https://cdn.bootcss.com/foundation/6.4.2-rc2/js/foundation.min.js",
            "/assets/js/main.js"
        ]
    }
    gulp.src('./*.ejs').pipe(ejs(data,{}, {ext: '.html'})).pipe(gulp.dest('./dist'));
});
gulp.watch('./*.ejs', ['ejs']);
gulp.watch('./include/*/*.ejs', ['ejs']);
gulp.watch('./include/*.ejs', ['ejs']);

3.
.pipe(autoprefixer({
    browsers: ['last 2 versions'],    //'browsers': ['> 0.01%'],'
    cascade: false,                   //是否美化属性值，默认为true
    remove:true                       //是否去掉不必要的前缀
}))

4.
gulp.task('cssmin',['sass'], () =>
    gulp.src(['./css/*.css','!./css/*.min.css'])
    .pipe(minifyCss())
    .pipe(ext_replace('.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true})) 
);
5.
 browserSync.init({
        server: {
            //proxy: "你的域名或IP"
            //port:3000 
        }
});