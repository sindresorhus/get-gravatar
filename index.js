'use strict';

const gravatarUrl = require('gravatar-url');
const got = require('got');

module.exports = async (email, options) => {
	const {body} = await got(gravatarUrl(email, options), {encoding: 'buffer'});
	return body;
};
