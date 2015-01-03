/*
 * Task runner
 *
 */
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    scsshint = require('gulp-scss-lint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache');

/*
 * Lint and compile scss to css
 *
 */
gulp.task('scsslint', function() {
  return gulp.src('_src/scss/*.scss')
    .pipe(scsshint());
});

gulp.task('styles', function() {
  gulp.start('scsslint');

  return gulp.src('_src/scss/jshamsul.scss')
    .pipe(sass({ style: 'expended' }))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'))
    .pipe(notify({ message: 'Styles task done...' }))
});

/*
 * Lint, concat and minify the javascript file
 *
 */
gulp.task('jslint', function() {
  return gulp.src(['_src/js/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
});

gulp.task('scripts', function() {
  gulp.start('jslint');

  return gulp.src([
    '_src/js/vendor/*.js',
    '_src/js/*.js'])
    .pipe(concat('jshamsul.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(notify({ message: 'Javascript task done' }))
});

/*
 * Clean up
 *
 */
gulp.task('clean', function() {
  return gulp.src(['assets/css', 'assets/js'], { read: false })
    .pipe(clean())
});

/*
 * Default task to run styles and scripts
 *
 */
gulp.task('default', function() {
  gulp.start('styles', 'scripts');
});

/*
 * Watch changes and run the right task
 *
 */
gulp.task('watch', function() {
  gulp.watch('_src/scss/*.scss', ['styles']);
  gulp.watch('_src/js/*.js', ['scripts']);
});
