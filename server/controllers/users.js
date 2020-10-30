var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.user.getAll((err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(results);
      }
    });
  },
  post: function (req, res) {
    var data = req.body.username;
    models.users.create(data, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });
  }
};
