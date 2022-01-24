const { src, dest } = require('gulp');

const path = require('../config/path.js');

// Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');


// HTML processing
const html = () => {
    return src(path.html.src)
      .pipe(plumber({
          errorHandler: notify.onError()
      }))
      .pipe(fileInclude({
          prefix: '@@',
          basepath: '@file'
      }))
      .pipe(size({
          title: 'Before compression'
      }))
      .pipe(htmlmin({
          collapseWhitespace: true
      }))
      .pipe(size({
          title: 'After compression'
      }))
      .pipe(dest(path.html.dest));
}

module.exports = html;