/// <reference types="node"/>
import {Options as GravatarUrlOptions} from 'gravatar-url';

declare namespace getGravatar {
	type Options = GravatarUrlOptions;
}

/**
Get a Gravatar image.

@param email - Email matching a Gravatar profile.

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
