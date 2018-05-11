"use strict";
exports.__esModule = true;
var application_1 = require("./application");
var app = new application_1.Application();
var express = app.express;
var port = process.env.PORT || 3000;
express.listen(port, function (err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log("Server is listening on port " + port);
});
