const pathSrc = './src';
const pathDest = './public';

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + '/**/*.html',
        watch: pathSrc + '/**/*.html',
        dest: pathDest
    },

    scss: {
        src: pathSrc + '/scss/**/*.scss',
        watch: pathSrc + '/scss/**/*.scss',
        dest: pathDest + '/css'
    },

    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/*.js',
        dest: pathDest + '/js'
    },

    img: {
        src: pathSrc + '/assets/images/*.*',
        watch: pathSrc + '/assets/images/*.*',
        dest: pathDest + '/img'
    },

    svg: {
        src: pathSrc + '/assets/images/*.svg',
        watch: pathSrc + '/assets/images/*.svg',
        dest: pathDest + '/img/sprite'
    },

    fonts: {
        src: pathSrc + '/assets/fonts/*.ttf',
        watch: pathSrc + '/assets/fonts/*.ttf',
        dest: pathDest + '/fonts'
    },
}