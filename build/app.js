'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const api_1 = __importDefault(require("./server/routes/api"));
const web_1 = __importDefault(require("./server/routes/web"));
const app = new koa_1.default();
app.use(api_1.default.routes());
app.use(api_1.default.allowedMethods());
app.use(web_1.default.routes());
app.use(web_1.default.allowedMethods());
app.listen(3000);
