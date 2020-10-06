'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const webRouter = new koa_router_1.default();
webRouter.get('/', function (ctx, next) {
    ctx.body = 'Hello world!';
    next();
});
exports.default = webRouter;
