"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = __importDefault(require("bluebird"));
const mysql_1 = __importDefault(require("mysql"));
const config_1 = __importDefault(require("../../config"));
bluebird_1.default.promisifyAll(require("mysql/lib/Connection").prototype);
bluebird_1.default.promisifyAll(require("mysql/lib/Pool").prototype);
const pool = mysql_1.default.createPool({
    host: config_1.default.mysql.HOST,
    user: config_1.default.mysql.USER,
    password: config_1.default.mysql.PASSWORD,
    database: config_1.default.mysql.DATABASE,
    connectionLimit: 16,
});
const _getConn = function () {
    return pool.getConnectionAsync().disposer(connection => {
        connection.release();
    });
};
const query = function (_query, binds = {}) {
    console.log('MYSQL:', _query, binds);
    return bluebird_1.default.using(_getConn(), conn => {
        return conn.queryAsync(_query, binds);
    });
};
const startTransaction = function (fn) {
    return bluebird_1.default.using(_getConn(), conn => {
        return conn.query('START TRANSACTION')
            .then(() => {
            return fn(conn);
        })
            .then(() => {
            return conn.queryAsync('COMMIT');
        })
            .catch(err => {
            console.log("ERROR_TRANSACTION_MYSQL", err);
            conn.queryAsync('ROLLBACK');
        });
    });
};
exports.default = { query, startTransaction };
