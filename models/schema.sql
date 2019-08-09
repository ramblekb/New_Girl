DROP DATABASE IF EXISTS class_db;
CREATE DATABASE class_db;

USE class_db;

CREATE TABLE calendar (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    month VARCHAR(255) NOT NULL,
    day VARCHAR(255) NOT NULL,
    event_id INTEGER,
    event_name VARCHAR(255),
    event_description TEXT
);

CREATE TABLE student_calendar (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    day_id INTEGER NOT NULL,
    month VARCHAR(255) NOT NULL,
    day VARCHAR(255) NOT NULL,
    event_name VARCHAR(255),
    event_description TEXT
);

CREATE TABLE users (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
)
