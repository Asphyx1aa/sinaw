const { src, dest } = require('gulp');

const path = require('../config/path.js');

// Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');


// Fonts processing
const fonts = () => {
    return src(path.fonts.src)
      .pipe(plumber({
          errorHandler: notify.onError()
      }))
      .pipe(ttf2woff())
      .pipe(src(path.fonts.src))
      .pipe(ttf2woff2())
      .pipe(dest(path.fonts.dest));
}

module.exports = fonts;