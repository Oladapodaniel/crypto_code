// const gulp = require('gulp');
import gulp from 'gulp'
import browserSync from 'browser-sync';
import uncss from 'gulp-uncss';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';

// Compile SCSS file to CSS and Vendor prefixes
gulp.task('sass', async function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream())
})

gulp.task('browser-sync', async function () {
    browserSync.init({
        server: './public',
        notify: false,
        open: false
    })
})
gulp.task('browser-sync-prod', async function () {
    browserSync.init({
        server: './dist',
        notify: false,
        open: false
    })
})

gulp.task('reloadbrowser', async function() {
    return gulp.src('./public/**/*.html')
        .pipe(browserSync.stream())
})

// Remove unused css
// Minify css file
gulp.task('minify-css', async function () {
    return gulp.src('./public/main.css')
        .pipe(uncss({
            html: ['./public/**/*.html']
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist'))
})

// Minify HTML and reload browser with index.html in dist folder
gulp.task('minify-html', async function () {
    return gulp.src('./public/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream())
})

gulp.task('minify-images', async function () {
    return gulp.src('./public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
})

gulp.task('production', gulp.series('browser-sync-prod', 'minify-css', 'minify-images', 'minify-html'))

gulp.task('watch', function () {
    gulp.watch('./public/**/*.html', gulp.series('reloadbrowser'));
    gulp.watch('./public/**/*.js', gulp.series('reloadbrowser'));
    gulp.watch('./src/**/*.scss', gulp.series('sass'))
});

// Default
gulp.task('default', gulp.series('browser-sync', 'watch'));
