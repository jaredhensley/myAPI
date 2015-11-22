var mainCtrl = require('./mainCtrl');
var counter = 0;
var count = 0;

module.exports = {

  generateID: function (req, res, next) {
    var arrayLength = mainCtrl.skillsLength;
    counter = arrayLength + 1 + count;
    count++;
    var randomID = counter;
    req.body.id = randomID;
    next();
  }

}