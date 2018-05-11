"use strict";
exports.__esModule = true;
var apollo_server_express_1 = require("apollo-server-express");
var express_1 = require("express");
var index_1 = require("./schemas/index");
var graphqlRouter = express_1.Router();
exports.graphqlRouter = graphqlRouter;
graphqlRouter.post("/graphql", apollo_server_express_1.graphqlExpress({
    schema: index_1.Schema.make()
}));
