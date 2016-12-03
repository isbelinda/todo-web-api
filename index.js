"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.status(400).send('Hello Express App');
});
app.listen(3000, function () { return console.log('Server listen on 3000'); });
