const url = require('url');
const path = require('path');

module.exports = (pathUrl) => {
  return url.format({
    pathname: path.join(process.cwd(), pathUrl),
    protocol: 'file:',
    slashes: true
  });
}
