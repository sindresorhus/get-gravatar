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
import {promisify} from 'util';
import * as fs from 'fs';
import getGravatar = require('get-gravatar');

const writeFileP = promisify(fs.writeFile);

(async () => {
	const image = await getGravatar('sindresorhus@gmail.com', {size: 200});
	await writeFileP('sindre.png', image);

	console.log('Successfully downloaded the Gravatar image');
})();
```
*/
declare function getGravatar(
	email: string,
	options?: getGravatar.Options
): Promise<Buffer>;

export = getGravatar;
