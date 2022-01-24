const del = require('del');

const path = require('../config/path.js');

// Deleting public folder
const clear = () => {
    return del(path.root);
}

module.exports = clear;