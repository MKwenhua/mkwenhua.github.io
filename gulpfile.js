const gulp = require('gulp');
const fs = require("fs");
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const stripCssComments = require('gulp-strip-css-comments');



gulp.task('default', () => {
  return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'styles/body.css',
      'styles/list.css',
      'docstyles.css',
      'headline.css',
      'docs-extra.css'
    ])
    .pipe(stripCssComments())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(''))
});
