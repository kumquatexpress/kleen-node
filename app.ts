'use strict'
import Koa from 'koa';
import apiRouter from './server/routes/api';
import webRouter from './server/routes/web';
import config from './config';

const app = new Koa();
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

app.use(webRouter.routes());
app.use(webRouter.allowedMethods());

app.listen(config.app.PORT);
