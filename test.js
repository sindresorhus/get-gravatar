import test from 'ava';
import FileType from 'file-type';
import getGravatar from './index.js';

test('main', async t => {
	const image = await getGravatar('sindresorhus@gmail.com', {size: 200});
	const fileType = await FileType.fromBuffer(image);
	t.is(fileType.ext, 'png');
});
