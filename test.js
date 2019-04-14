import test from 'ava';
import fileType from 'file-type';
import getGravatar from '.';

test('main', async t => {
	const img = await getGravatar('sindresorhus@gmail.com', {size: 200});
	t.is(fileType(img).ext, 'png');
});
