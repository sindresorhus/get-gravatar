'use strict';
const gravatarUrl = require('gravatar-url');
const got = require('got');

module.exports = async (identifier, options) => {
	const {body} = await got(gravatarUrl(identifier, options), {encoding: 'buffer'});
	return body;
};
