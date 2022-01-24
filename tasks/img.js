const { src, dest } = require('gulp');

const path = require('../config/path.js');

// Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');


// Image processing
const img = () => {
    return src(path.img.src)
      .pipe(plumber({
          errorHandler: notify.onError()
      }))
      .pipe(newer(path.img.dest))
      .pipe(imagemin({
          verbose: true
      }))
      .pipe(dest(path.img.dest));
}

module.exports = img;