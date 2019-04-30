# get-gravatar [![Build Status](https://travis-ci.org/sindresorhus/get-gravatar.svg?branch=master)](https://travis-ci.org/sindresorhus/get-gravatar)

> Get a Gravatar image


## Install

```
$ npm install get-gravatar
```


## Usage

```js
const {promises: fs} = require('fs');
const getGravatar = require('get-gravatar');

(async () => {
	const image = await getGravatar('sindresorhus@gmail.com', {size: 200});
	await fs.writeFile('sindre.png', image);

	console.log('Successfully downloaded the Gravatar image');
})();
```


## API

### getGravatar(email, [options])

Returns a promise for the image as a `Buffer`.

#### email

Type: `string`

Email matching a Gravatar profile.

#### options

Type: `object`

##### size

Type: `number`<br>
Default: `80`<br>
Values: `1..2048`

[Size](https://en.gravatar.com/site/implement/images/#size) of the image.

##### default

Type: `string`<br>
Default: [This image](https://gravatar.com/avatar/00000000000000000000000000000000)<br>
Values: Custom URL or [`404`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=404), [`mm`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=mm), [`identicon`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=identicon), [`monsterid`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=monsterid), [`wavatar`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=wavatar), [`retro`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=retro), [`blank`](https://gravatar.com/avatar/5cc22f8c06631cccead907acbb627b69?default=blank)

[Image](https://en.gravatar.com/site/implement/images/#default-image) to return if the email didn't match any Gravatar profile.

##### rating

Type: `string`<br>
Default: `g`<br>
Values: `g` `pg` `r` `x`

Allowed [rating](https://en.gravatar.com/site/implement/images/#rating) of the image.


## Related

- [get-gravatar-cli](https://github.com/SamVerschueren/get-gravatar-cli) - CLI for this module
- [gravatar-url](https://github.com/sindresorhus/gravatar-url) - Get the URL to a Gravatar image from an email


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
