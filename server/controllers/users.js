var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(results);
      }
    });
  },
  post: function (req, res) {
    var data = req.body.username;
    console.log(req.body);
    models.users.create(data, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
  }
};
