'use strict'
import config from '../../config';
import redis from 'thunk-redis';

export default redis.createClient(
	`${config.redis.HOST}:${config.redis.PORT}`,
	{
		usePromise: true,
		database: 1
	},
)

