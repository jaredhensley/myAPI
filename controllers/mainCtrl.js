var occupations = {

  occupations: ['pooper', 'finance dude', 'lab tech', 'box-office manager', 'physical therapy school withdrawer']

}

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

var location = {
  location: 'Dallas, Texas'
}

var name = {
  name: 'Jared'
};

var users = [{

  username: 'jared',
  pin: 'ghostbuster4life',
  secret: 'farts in pools'

}];

var skills = [
  {
    id: 1,
    name: "javascript",
    experience: "intermediate"
  },
  {
    id: 2,
    name: "cake maker",
    experience: "advanced"
  },
  {
    id: 3,
    name: "pothole fixer",
    experience: "beginner"
  },

];

module.exports = {

  users: users,

  skillsLength: skills.length,

  getName: function (req, res) {
    return res.json(name)
  },

  changeName: function (req, res) {
    name.name = req.body.name;
    res.json(name);

  },

  getLocation: function (req, res) {
    return res.json({
      location: location.location
    })
  },

  updateLocation: function (req, res) {
    location.location = req.body.location;
    return res.json(location);
  },

  getOccupations: function (req, res) {
    if (req.params.name) {
      occupations.occupations.forEach(function (value, index) {
        if (req.params.name === value) {
          return res.json({
            occupations: occupations.occupations[index]
          });
        }
      })
    }

    if (req.query.order === "desc") {
      return res.json({
        occupations: occupations.occupations.sort()
      })
    } else if (req.query.order === "asc") {
      return res.json({
        occupations: occupations.occupations.sort().reverse()
      })

    } else {
      return res.json({
        occupations: occupations.occupations
      })
    }
  },

  getLatestOccupation: function (req, res) {
    return res.json({
      latestOccupation: occupations.occupations[occupations.occupations.length - 1]
    })
  },

  getHobbies: function (req, res) {
    if (req.params.name) {
      hobbies.forEach(function (value, index) {
        if (value.name === req.params.name) {
          return res.json({
            hobbies: hobbies[index]
          })
        }

      })
    }
    return res.json({
      hobbies: hobbies
    })
  },

  updateHobbies: function (req, res) {
    hobbies.push(req.body);
    return res.json(hobbies);
  },

  updateOccupations: function (req, res) {
    occupations.occupations.push(req.body.job);
    return res.json(occupations);
  },

  getSkills: function (req, res) {
    if (req.params.name) {
      skills.forEach(function (value, index) {
        if (value.name === req.params.name) {
          return res.json({
            skills: skills[index]
          });
        }
      });
    }

    var intermediate = [];
    var beginner = [];
    var advanced = [];

    skills.forEach(function (value, index) {
      for (prop in value) {
        if (value[prop] === "intermediate") {
          intermediate.push(value);
        } else if (value[prop] === "beginner") {
          beginner.push(value);
        } else if (value[prop] === "advanced") {
          advanced.push(value);
        }
      }
    });

    if (req.query.experience === "intermediate") {
      return res.json(intermediate);
    } else if (req.query.experience === "advanced") {
      return res.json(advanced);
    } else if (req.query.experience === "beginner") {
      return res.json(beginner);
    } else {
      return res.json(skills);
    }

  },

  updateSkills: function (req, res) {
    skills.push(req.body);
    return res.json(skills);
  },

  getSecrets: function (req, res) {
    return res.json(users[req.index].secret);
  }

}