const path = require('path');

const getPathFromRoot = (_path) => path.resolve(process.cwd(), _path);

exports.getPathFromRoot = getPathFromRoot;
