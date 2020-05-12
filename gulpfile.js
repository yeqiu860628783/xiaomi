let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let uglify = require("gulp-uglify");
let sass = require("gulp-sass");
let babel =require("gulp-babel");

gulp.task("default",async ()=>{
    gulp.watch(["./src/**/*", "!./src/{scss,scss/**}"], async () => {
        gulp.src(["./src/**/*", "!./src/{scss,scss/**}"])
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\xiao"));
    });
    // 压缩html
    gulp.watch("./src/*.html",async ()=>{
        gulp.src("./src/*.html")
        // .pipe(htmlmin({
        //     collapseWhitespace:true
        // }))
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xiao"));
    });    

    // 压缩js
    gulp.watch(["./src/js/*.js", "!./src/js/jQuery.js"], async () => {
        gulp.src("./src/js/*.js")
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xiao\\js"));
    });    

    //编译sass
    gulp.watch("./src/scss/*.scss",async ()=>{
        gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xiao\\css"));
    });

    
    //把php文件夹里的所有代码原封不动的复制到服务器目录下
    gulp.watch("./src/php/**/*",async ()=>{
        gulp.src("./src/php/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xiao\\php"));
    });
    
});