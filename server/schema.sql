CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INT(5) NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NULL, -- anonymous users?
  user_createdAt DATETIME, -- (fsp)
  PRIMARY KEY (user_id) -- CONSTRAINT <alias>? need?
);

CREATE TABLE rooms (
  room_id INT(5) NOT NULL AUTO_INCREMENT,
  room_name VARCHAR(30) NULL, -- anonymous users?
  room_createdAt DATETIME, -- (fsp)??
  PRIMARY KEY (room_id)
);

CREATE TABLE messages (
  message_id INT(30) NOT NULL AUTO_INCREMENT,
  msg_txt VARCHAR(140) NOT NULL,
  msg_createdAt DATETIME,
  user_id INT,
  room_id INT,
  PRIMARY KEY (message_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);
-- foreign keys must come after tables th



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

