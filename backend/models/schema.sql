-- uncomment this line to be able to drop the database tabels 
DROP DATABASE FormDatabase;

-- create database with name FormDatabase
CREATE DATABASE FormDatabase;

-- use the FormDatabase to create  tabels 
USE  FormDatabase;

-- ============================ // 
CREATE TABLE permissions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    permission VARCHAR(100) NOT NULL UNIQUE
);

-- ============================ // 
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(100) NOT NULL UNIQUE
);

-- ============================ //  
CREATE TABLE role_permission (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles (id),
    FOREIGN KEY (permission_id) REFERENCES permissions (id)
);

-- ============================ //  
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);
CREATE TABLE usersInfo(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    Educational VARCHAR(255) NOT NULL,
    birthday DATETIME NOT NULL,
    about MEDIUMTEXT NOT NULL,
    img VARCHAR(255),
    nationality VARCHAR(255) NOT NULL,
    righTimes VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    scientificSpecialization VARCHAR(255) NOT NULL,
    hearAUs VARCHAR(255) NOT NULL,
    knowAboutUs VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE notes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    note MEDIUMTEXT NOT NULL,
    user_id INT NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);