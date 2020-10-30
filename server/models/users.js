var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM users', (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
  create: function (data, callback) {
    db.query('INSERT INTO users(username) values (?)', data, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
};
