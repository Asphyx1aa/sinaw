const { src, dest } = require('gulp');

const path = require('../config/path.js');

// Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const sprite = require('gulp-svg-sprite');


// SVG sprites
const svg = () => {
    return src(path.svg.src)
      .pipe(plumber({
          errorHandler: notify.onError()
      }))
      .pipe(newer(path.svg.dest))
      .pipe(sprite({
          mode: {
              stack: {
                  sprite: '../sprite.svg'
              }
          }
      }))
      .pipe(dest(path.svg.dest));
}

module.exports = svg;