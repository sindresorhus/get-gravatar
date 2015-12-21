import test from 'ava';
import fileType from 'file-type';
import fn from './';

test(async t => {
	const img = await fn('sindresorhus@gmail.com', {size: 200});
	t.is(fileType(img).ext, 'png');
});
