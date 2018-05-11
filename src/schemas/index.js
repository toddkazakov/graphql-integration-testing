"use strict";
exports.__esModule = true;
var graphql_tools_1 = require("graphql-tools");
var Schema = /** @class */ (function () {
    function Schema() {
    }
    Schema.make = function () {
        return graphql_tools_1.makeExecutableSchema({
            resolvers: [],
            typeDefs: ""
        });
    };
    return Schema;
}());
exports.Schema = Schema;
