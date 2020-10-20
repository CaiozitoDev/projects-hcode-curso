const { resolve } = require('path')
const path = require('path')

module.exports = {
    entry: {
        app: './src/index.js',
        'pdf.worker': 'pdfjs-dist/build/pdf.worker.entry.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist'
    }
}