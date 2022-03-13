var express = require('express');
var app = express();
app.use('/', (req, res, next) => {
    console.log("Hello World");
    next();
})



































 module.exports = app;
