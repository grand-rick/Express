"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Welcome');
});
app.get('/api', function (req, res) {
    res.send('Server Working here');
});
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
