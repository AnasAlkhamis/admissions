-- uncomment this line to be able to drop the database tabels 
-- DROP DATABASE FormDatabase

-- create database with name FormDatabase
CREATE DATABASE FormDatabase;

-- use the FormDatabase to create  tabels 
USE  FormDatabase;

-- ============================ // done
CREATE TABLE permissions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    permission VARCHAR(100) NOT NULL
);

-- ============================ // done
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(100) NOT NULL
);

-- ============================ // done 
CREATE TABLE role_permission (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles (id),
    FOREIGN KEY (permission_id) REFERENCES permissions (id)
);