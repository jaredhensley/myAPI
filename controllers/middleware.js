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
  },

  verifyuser: function (req, res, next) {
    var flag = false;
    mainCtrl.users.forEach(function (value, index) {
      for (prop in value) {
        if (prop === 'username' && value[prop] === req.params.username) {
          flag = true;
        }
        if (prop === 'pin' && value[prop] === req.params.pin) {
          flag = true;
          req.index = index;
          break;
        }
        flag = false;
      }
      flag ? next() : res.end('not authorized');
    });
  }

}