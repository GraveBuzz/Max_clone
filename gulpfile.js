const gulp = require('gulp');
const { pipeline } = require('readable-stream');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/img/**/*', {encoding: false})
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}