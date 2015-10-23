'use strict';
var gravatarUrl = require('gravatar-url');
var got = require('got');

module.exports = function (email, opts) {
	return got(gravatarUrl(email, opts), {encoding: null}).then(function (data) {
		return data.body;
	});
};
