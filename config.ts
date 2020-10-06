const env = process.env

const Config = {
        redis: {
		HOST: env.REDIS_HOST || 'redis',
		PORT: env.REDIS_PORT || 6379,
                PASSWORD: env.REDIS_PASSWORD || '',
	},
	mysql: {
		HOST: env.MYSQL_HOST || 'mysql',
		PASSWORD: env.MYSQL_PASSWORD || 'mysql',
		USER: env.MYSQL_USER || 'nodeapp',
		DATABASE: env.MYSQL_DATABASE || 'app_dev',
	},
	postgres: {
		HOST: env.PGHOST || 'postgres',
		PASSWORD: env.PGPASSWORD || 'postgres',
		USER: env.PGUSER || 'nodeapp',
		DATABASE: env.PGDATABASE || 'app_dev',
	},
        app: {
                PORT: env.PORT || 3000,
        },
}

export default Config

