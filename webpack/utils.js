const path = require('path');

const setPath = (pathString) => `${path.resolve(process.cwd(), pathString)}`;

const getHtmlWebpackPluginList = (HtmlWebpackPlugin, chunks) => {
  return chunks.map((chunk) => {
    return new HtmlWebpackPlugin({
      xhtml: true,
      template: setPath('src/template.html'),
      title: chunk.title,
      chunksSortMode: 'manual',
      chunks: [...(chunk.dependOn ?? []), chunk.name],
      filename: `${chunk.name}.html`,
    });
  });
};

module.exports = {
  setPath,
  getHtmlWebpackPluginList,
};
