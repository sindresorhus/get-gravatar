'use strict';
var test = require('ava');
var fileType = require('file-type');
var getGravatar = require('./');

test(function (t) {
	t.plan(2);

	getGravatar('sindresorhus@gmail.com', {size: 200}, function (err, img) {
		t.assert(!err, err);
		t.assert(fileType(img).ext === 'png');
	});
});
