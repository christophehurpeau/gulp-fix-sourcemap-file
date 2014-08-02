'use strict';
var through = require('through2');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.sourceMap) {
			file.sourceMap.file = file.relative;
		}

		this.push(file);
		cb();
	});
};
