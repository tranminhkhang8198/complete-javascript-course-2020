const path = require('path');

module.exports = {
    entry: './src/js/index',
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    mode: 'development'
}
