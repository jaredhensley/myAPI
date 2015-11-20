var occupations = ['finance dude', 'lab assistant', 'box-office manager', 'physical therapy school withdrawer'];

var hobbies = [
  {
    "name": "programming",
    "type": "current"
  },
  {
    "name": "working out",
    "type": "current"
  },
  {
    "name": "video games",
    "type": "past"
  }
];


module.exports = {

  getName: function () {
    return {
      name: 'Jared Hensley'
    }
  },
  location: function () {
    return {
      location: 'Dallas, Texas'
    }
  },
  occupations: function () {
    return {
      occupations: occupations
    }
  },

  latestOccupation: function () {
    return {
      latestOccupation: occupations[occupations.length - 1]
    }
  },
  hobbies: function () {
    return {
      hobbies: hobbies
    }
  }

}