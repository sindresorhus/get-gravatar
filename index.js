'use strict';
const gravatarUrl = require('gravatar-url');
const got = require('got');

module.exports = (email, opts) => got(gravatarUrl(email, opts), {encoding: 'buffer'}).then(data => data.body);
