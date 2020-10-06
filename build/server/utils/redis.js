'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const thunk_redis_1 = __importDefault(require("thunk-redis"));
exports.default = thunk_redis_1.default.createClient(`${config_1.default.redis.HOST}:${config_1.default.redis.PORT}`, {
    usePromise: true,
    database: 1
});
