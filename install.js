var fs = require('fs');
var process = require('process');

if(process.platform.indexOf('win') === 0) {
  fs.readFile('index.js', 'utf8', function (err, data) {
    if(err) throw new Error(err);

    var res = data.replace('var isWindows = false;', 'var isWindows = true;');

    fs.writeFile('index.js', res, 'utf8', function (err) {
      if(err) throw new Error(err);
    });
  });
}
