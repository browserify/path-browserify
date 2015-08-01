var path = require('../index')
var test = require('tape').test

test('parse works on file', function(t) {
    var output = path.parse('test-path.js');
    t.equal(output.root, '', 'root is correct');
    t.equal(output.dir, '', 'dir is correct');
    t.equal(output.base, 'test-path.js', 'base is correct');
    t.equal(output.ext, '.js', 'ext is correct');
	t.equal(output.name, 'test-path', 'name is correct');
    t.end();
})

test('parse works on file with path', function(t) {
    var output = path.parse('/home/test/test-path.js');
    t.equal(output.root, '/', 'root is correct');
    t.equal(output.dir, '/home/test', 'dir is correct');
    t.equal(output.base, 'test-path.js', 'base is correct');
    t.equal(output.ext, '.js', 'ext is correct');
	t.equal(output.name, 'test-path', 'name is correct');
    t.end();
})