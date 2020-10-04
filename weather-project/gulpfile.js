const sass = require("gulp-sass");
const gulp = require("gulp");

function css() {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass({outputStyle: "expanded"}))
        .pipe(gulp.dest("public/css/"));
}

function watch() {
    gulp.watch("src/scss/**/*", css);
}

exports.build = css;
exports.watch = watch;