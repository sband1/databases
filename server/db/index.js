var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// https://www.npmjs.com/package/mysql

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'databases',
  database: 'chat'
});
// setup mySql server
connection.connect();

module.exports = connection;
