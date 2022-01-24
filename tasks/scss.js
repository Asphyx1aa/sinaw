const { src, dest } = require('gulp');

const path = require('../config/path.js');

// Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const sassGlob = require('gulp-sass-glob');


// SCSS processing
const scss = () => {
    return src(path.scss.src, { sourcemaps: true })
      .pipe(plumber({
          errorHandler: notify.onError()
      }))
      .pipe(sassGlob())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(size({
          title: 'main.css'
      }))
      .pipe(dest(path.scss.dest, { sourcemaps: true }))
      .pipe(rename({
          suffix: '.min'
      }))
      .pipe(csso())
      .pipe(size({
          title: 'main.min.css'
      }))
      .pipe(dest(path.scss.dest, { sourcemaps: true }));
}

module.exports = scss;