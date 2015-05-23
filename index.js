'use strict';
var gravatarUrl = require('gravatar-url');
var got = require('got');

module.exports = function (email, opts, cb) {
	if (typeof opts !== 'object') {
		cb = opts;
		opts = {};
	}

	got(gravatarUrl(email, opts), {encoding: null}, cb);
};
