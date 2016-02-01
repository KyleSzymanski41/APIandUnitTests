var express = require('express');
var body_parser = require('body-parser');
var app = express();

// Config
var port = 3000;

var server = app.listen(port, function() {
    console.log('Server Active on', port);
});

app.use('/api', require('../routes/api.js')(express));

module.exports = server;