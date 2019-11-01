/// <reference types="node"/>
import {Options as GravatarUrlOptions} from 'gravatar-url';

declare namespace getGravatar {
	type Options = GravatarUrlOptions;
}

/**
Get a Gravatar image from an identifier, such as an email.

@param identifier - Identifier for which to get a Gravatar image, such as an email matching a Gravatar profile.

@param options - The options to use. 

@example
```
import {promises as fs} from 'fs';
import getGravatar = require('get-gravatar');

(async () => {
	const image = await getGravatar('sindresorhus@gmail.com', {size: 200});
	await fs.writeFile('sindre.png', image);

	console.log('Successfully downloaded the Gravatar image');
})();
```
*/
declare function getGravatar(
	email: string,
	options?: getGravatar.Options
): Promise<Buffer>;

export = getGravatar;
