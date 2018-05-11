"use strict";
exports.__esModule = true;
var express = require("express");
var graphqlRouter_1 = require("./graphqlRouter");
var Application = /** @class */ (function () {
    function Application() {
        this.express = express();
        this.express.use(graphqlRouter_1.graphqlRouter);
    }
    return Application;
}());
exports.Application = Application;
