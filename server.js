var express = require('express');
var bodyParser = require('bodyParser');
var cors = require('cors');
var mainCtrl = require('./controllers/mainCtrl');
var middleware = require('./controllers/middleware');
var app = express();

app.get('/name', mainCtrl.getName);



app.use(bodyParser.json(), cors());