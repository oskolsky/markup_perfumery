var
  gulp = require('gulp'),
  haml = require('gulp-ruby-haml'),
  htmlreplace = require('gulp-html-replace'),
  htmlhint = require('gulp-htmlhint'),
  htmlmin = require('gulp-htmlmin'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssmin = require('gulp-cssmin'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch');

gulp.task('layouts', function() {
  gulp.src('./*.haml')
    .pipe(haml({doubleQuote: true}))
    .pipe(htmlreplace('javascripts', '/assets/javascripts/application.js', '<script src="%s"></script>'))
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'));
});

gulp.task('stylesheets', function() {
  gulp.src('./assets/stylesheets/application.scss')
    .pipe(sass({noCache: 'true'}))
    .pipe(autoprefixer('last 2 versions', 'ie 9'))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/assets/stylesheets'));
});

gulp.task('javascripts', function() {
  gulp.src(['./assets/javascripts/*.js', './assets/javascripts/polyfill/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter());
  gulp.src([
    './assets/javascripts/vendor/modernizr-latest.js',
    './assets/javascripts/vendor/yepnope.js',
    './assets/javascripts/vendor/jquery-2.1.0.js',
    './assets/javascripts/vendor/jquery-ui-1.10.4.js',
    './assets/javascripts/vendor/underscore.js',
    './assets/javascripts/vendor/backbone.js',
    './assets/javascripts/vendor/smartresize.js',
    './assets/javascripts/vendor/doublehover.js',
    './assets/javascripts/vendor/jquery.arcticmodal.js',
    './assets/javascripts/vendor/owl.carousel.js',
    './assets/javascripts/vendor/imagesloaded.pkgd.js',
    './assets/javascripts/vendor/masonry.pkgd.js',
    './assets/javascripts/vendor/accounting.js',
    './assets/javascripts/polyfill/polyfill.js',
    './assets/javascripts/config.js',
    './assets/javascripts/jquery.extensions.js',
    './assets/javascripts/forms.js',
    './assets/javascripts/components.js',
    './assets/javascripts/application.js',
    './assets/javascripts/project.js'
  ])
    .pipe(concat('application.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets/javascripts/'))
});

gulp.task('images', function() {
  gulp.src('./assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/images'));
});

gulp.task('copy', function() {
  gulp.src('./assets/stylesheets/vendor/**/*')
    .pipe(gulp.dest('./build/assets/stylesheets/vendor'));
  gulp.src('./assets/javascripts/polyfill/vendor/**/*')
    .pipe(gulp.dest('./build/assets/javascripts/polyfill/vendor'));
  gulp.src([
    './favicon.ico',
    './humans.txt',
    './robots.txt'
  ])
    .pipe(gulp.dest('./build'));
});

gulp.task('connect', connect.server({
  root: ['./build'],
  port: 1111,
  livereload: true,
  open: {
    browser: 'chrome'
  }
}));

gulp.task('default', function() {
  gulp.start('layouts', 'stylesheets', 'javascripts', 'images', 'copy');
});