const getPathFromRoot = (_path) =>
  require('path').resolve(process.cwd(), _path);

exports.getPathFromRoot = getPathFromRoot;
