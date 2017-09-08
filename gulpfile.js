var gulp = require("gulp");
var uglify = require("gulp-uglify")
gulp.task("test",function () {
    console.log(11);
});


gulp.task("script",function () {
    gulp.src("js/jsg.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist"))
})