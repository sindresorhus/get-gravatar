import test from 'ava';
import fileType from 'file-type';
import m from './';

test(async t => {
	const img = await m('sindresorhus@gmail.com', {size: 200});
	t.is(fileType(img).ext, 'png');
});
