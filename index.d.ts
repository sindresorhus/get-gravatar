/// <reference types="node"/>
import {Options as GravatarUrlOptions} from 'gravatar-url';

declare namespace getGravatar {
	type Options = GravatarUrlOptions;
}

/**
Get a Gravatar image from an identifier, such as an email.

@param identifier - Identifier for which to get the Gravatar image. This will typically be an email matching a Gravatar profile, but can technically be any string. The Gravatar service only sees a hash of the identifier, so you could actually use this to get pseudo-random avatars for any entity, e.g. based on its ID. Note that if the identifier contains an `@`, it is assumed to be an email, and will therefore be lower-cased and trimmed before hashing, as per the Gravatar instructions - otherwise it will be hashed as-is.

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
