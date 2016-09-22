var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var port = process.env.PORT || 3000;
var path = require('path');

global.mongoskin = require('mongoskin');

var connection_str = "mongodb://@localhost:27017/tweets";

global.db = mongoskin.db(connection_str);
db.bind('krk');

app.use('/api/', require('./routes/api'));

// cross origin:
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// end of cross

app.use('/', express.static(__dirname + '../angular/app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../angular/app/', 'index.html'));
});

app.listen(port, () => {
    console.log('Listening on server ' + port);
});