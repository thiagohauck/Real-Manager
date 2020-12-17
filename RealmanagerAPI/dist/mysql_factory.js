"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLFactory = void 0;
var mysql_1 = require("./mysql");
var MySQLFactory = /** @class */ (function () {
    function MySQLFactory() {
    }
    MySQLFactory.prototype.getConnection = function () {
        return new mysql_1.MySQL('localhost', 'root', '', 'realmanagerbd');
    };
    return MySQLFactory;
}());
exports.MySQLFactory = MySQLFactory;
