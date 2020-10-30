var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    // invoke models.readALL with call back
    console.log('hi adam');
    models.messages.getAll((err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(result);
      }
    });
  },
  post: function (req, res) {
    console.log(req);
    var data = [req.body.message, req.body.username, req.body.roomname];
    model.messages.create(data, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    });

  } // a function which handles posting a message to the database
};

