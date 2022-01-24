const { src, dest } = require('gulp');

const path = require('../config/path.js');

// Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


// Javascript processing
const js = () => {
    return src(path.js.src, { sourcemaps: true })
      .pipe(plumber({
          errorHandler: notify.onError()
      }))
      .pipe(babel())
      .pipe(uglify())
      .pipe(dest(path.js.dest, { sourcemaps: true }));
}

module.exports = js;