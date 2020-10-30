var db = require('../db');

module.exports = {
  // a function which produces all the messages
  // a function which can be used to insert a message into the database
  // passes an array of messages to a callback
  getAll: function (callback) {
    // https://www.npmjs.com/package/mysql
    // do join to grab user names
    db.connection.query('SELECT * FROM messages', (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
    // using db.query query from the database
    // Select all messages from messages table with details
    // err first callback
  },
  // var data = [req.body.message, req.body.username, req.body.roomname];
  create: function (data, callback) {
    db.connection.query('INSERT INTO messages(msg_text, user_id, room_id) values(?, (select user_id from users where username = ?), (select room_id from rooms where room_name = ?)', data, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });

  }

};


