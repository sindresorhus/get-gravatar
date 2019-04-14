import {expectType} from 'tsd';
import getGravatar = require('.');

expectType<Promise<Buffer>>(getGravatar('sindresorhus@gmail.com'));
expectType<Promise<Buffer>>(getGravatar('sindresorhus@gmail.com', {size: 200}));
