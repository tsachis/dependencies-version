const fs = require('fs');

function _getDependencies(baseDir, data) {
  data = data || {};
  const dirs = fs.readdirSync(baseDir);
  dirs.forEach(function (dir) {
    try {
      const depPath = baseDir + '/' + dir;
      if (dir[0] !== '.' && fs.lstatSync(depPath).isDirectory()) {
        const file = depPath + '/package.json';
        const requirePath = file.replace('node_modules/', '');
        if (fs.existsSync(file)) {
          const contents = fs.readFileSync(file);
          const jsonContent = JSON.parse(contents);
          const version = jsonContent.version;
          const name = jsonContent.name || requirePath;
          data[name] = version;
        } else {
          _getDependencies(depPath, data);
        }
      }
    } catch (err) {
      console.error(err);
    }
  });
  return data;
}

module.exports = {
  list: function list() {
    return _getDependencies('node_modules');
  }
};