-- Create the burgers_db.
CREATE DATABASE burgers_db;

-- Switch to or use the burgers_db.
USE burgers_db;

-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.

CREATE TABLE burgers (

    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devour BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);