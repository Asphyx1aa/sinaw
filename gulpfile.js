const { watch, series, parallel } = require('gulp');

const path = require('./config/path.js');

// Plugins
const browserSync = require('browser-sync').create();


// Tasks 
const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');
const scss = require('./tasks/scss.js');
const js = require('./tasks/js.js');
const img = require('./tasks/img.js');
const svg = require('./tasks/svg.js');
const fonts = require('./tasks/fonts.js');


// Live server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        },
        notify: false
    });
}

// Watching files
const watching = () => {
    watch(path.html.src ,html).on('all', browserSync.reload);
    watch(path.scss.src, scss).on('all', browserSync.reload);
    watch(path.js.src, js).on('all', browserSync.reload);
    watch(path.img.src, img).on('all', browserSync.reload);
    watch(path.svg.src, svg).on('all', browserSync.reload);
    watch(path.fonts.src, fonts).on('all', browserSync.reload);
}

const build = series(
    clear,
    parallel(html, scss, js, img, svg, fonts)
);

const dev = series(
    build,
    parallel(server, watching) 
);

// Tasks
exports.default = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.svg = svg;


// Build
exports.dev = dev;
exports.build = build;
