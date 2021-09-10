import {Buffer} from 'node:buffer';
import {expectType} from 'tsd';
import getGravatar from './index.js';

expectType<Promise<Buffer>>(getGravatar('sindresorhus@gmail.com'));
expectType<Promise<Buffer>>(getGravatar('sindresorhus@gmail.com', {size: 200}));
