module.exports = {

  generateID: function (req, res, next) {

    console.log('i am here fool');
    console.log(skills);
    var randomID = 5;
    //figure this part out
    req.body.id = randomID;

    next();

  }
}