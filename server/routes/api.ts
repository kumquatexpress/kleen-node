'use strict'
import Router from 'koa-router';
import mysql from '../utils/mysql';

const apiRouter = new Router({
	prefix: '/api',
})

apiRouter.get('/', async (ctx, next) => {
	ctx.body = "Hello API!"
	next()
})

export default apiRouter

