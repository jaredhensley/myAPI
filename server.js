var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mainCtrl = require('./controllers/mainCtrl');
var middleware = require('./controllers/middleware');
var app = express();
var port = 9001;

app.use(bodyParser.json(), cors());

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:name', mainCtrl.getHobbies);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/:name', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/skills', mainCtrl.getSkills);
app.get('/skills/:name', mainCtrl.getSkills);
app.get('/secrets/:username/:pin', middleware.verifyuser, mainCtrl.getSecrets);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.updateLocation);
app.post('/hobbies', mainCtrl.updateHobbies);
app.post('/occupations', mainCtrl.updateOccupations);
app.post('/skills', middleware.generateID, mainCtrl.updateSkills);



app.listen(port, function () {
  console.log('hello');

});