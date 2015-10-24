# get-gravatar [![Build Status](https://travis-ci.org/sindresorhus/get-gravatar.svg?branch=master)](https://travis-ci.org/sindresorhus/get-gravatar)

> Get a Gravatar image


## Install

```
$ npm install --save get-gravatar
```


## Usage

```js
const fs = require('fs');
const getGravatar = require('get-gravatar');

getGravatar('sindresorhus@gmail.com', {size: 200}).then(image => {
	fs.writeFileSync('sindre.png', image);

	console.log('Successfully downloaded the Gravatar image');
});
```


## API

### getGravatar(email, [options])

Returns a promise for the image as a buffer.

#### email

Type: `string`

Email matching a Gravatar profile.

#### options

##### size

Type: `number`  
Default: `80`  
Values: `1..2048`

[Size](https://en.gravatar.com/site/implement/images/#size) of the image.

##### default

Type: `string`  
Default: [This image](http://www.gravatar.com/avatar/00000000000000000000000000000000)  
Values: Custom URL or `404`, `mm`, `identicon`, `monsterid`, `wavatar`, `retro`, `blank`

[Image](https://en.gravatar.com/site/implement/images/#default-image) to return if the email didn't match any Gravatar profile.

##### rating

Type: `string`  
Default: `g`  
Values: `g`, `pg`, `r`, `x`

Allowed [rating](https://en.gravatar.com/site/implement/images/#rating) of the image.


## Related

- [gravatar-url](https://github.com/sindresorhus/gravatar-url) - Get the URL to a Gravatar image from an email
- [get-gravatar-cli](https://github.com/SamVerschueren/get-gravatar-cli) - CLI for this module

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
