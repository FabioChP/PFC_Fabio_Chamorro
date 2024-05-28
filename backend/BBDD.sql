DROP DATABASE IF EXISTS urlshortener;
CREATE DATABASE urlshortener;
USE urlshortener;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
	id int primary key not null auto_increment,
    uname varchar(50) not null,
    email varchar(100) not null,
    passwd varchar(100) not null
);


DROP TABLE IF EXISTS urls;
CREATE TABLE urls(
	id int primary key not null auto_increment,
	old_route varchar(200) not null,
	new_route varchar(100) not null,
	clicks int not null default 0,
    fcreacion datetime not null,
    user_creador int not null,
    CONSTRAINT FK_urls_users FOREIGN KEY (user_creador) REFERENCES users(id)
);
