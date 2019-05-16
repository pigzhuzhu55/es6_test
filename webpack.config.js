const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve('./src/index.js'),
    },
    output: {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        path: path.resolve('./dist/'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /.js$/,
            loader: 'babel-loader'
        }]
    }
};