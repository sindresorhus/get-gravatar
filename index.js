import gravatarUrl from 'gravatar-url';
import got from 'got';

export default async function getGravatar(identifier, options) {
	return got(gravatarUrl(identifier, options)).buffer();
}
