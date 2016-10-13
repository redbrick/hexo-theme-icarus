var gulp = require('gulp');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cleanCSS = require('gulp-clean-css');

gulp.task('styles', function () {
    return gulp
        .src([
            './source/vendor/font-awesome/css/font-awesome.min.css',
            './source/vendor/open-sans/styles.css',
            './source/vendor/source-code-pro/styles.css',
            './source/vendor/lightgallery/css/lightgallery.min.css',
            './source/vendor/justified-gallery/justifiedGallery.min.css'
        ])
        .pipe(concat('vendor-styles.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./source/vendor-dest/'))
});

gulp.task('scripts', function () {
    gulp.src([
        './source/vendor/jquery/2.1.3/jquery.min.js',
        './source/vendor/classie/classie.js',
        './source/vendor/lightgallery/js/*.min.js',
        './source/vendor/justified-gallery/jquery.justifiedGallery.min.js'
    ])
        .pipe(concat('vendor-scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./source/vendor-dest/'))
});