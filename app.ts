'use strict'
import Koa from 'koa';
import apiRouter from './server/routes/api';
import webRouter from './server/routes/web';

const app = new Koa();
app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())

app.use(webRouter.routes())
app.use(webRouter.allowedMethods())

app.listen(3000)
