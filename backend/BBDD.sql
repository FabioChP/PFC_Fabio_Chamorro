DROP DATABASE IF EXISTS urlshortener;
CREATE DATABASE urlshortener;
USE urlshortener;

DROP TABLE IF EXISTS tUsers;
CREATE TABLE tUsers(
	id int primary key not null auto_increment,
    uname varchar(50) not null,
    email varchar(100) not null,
    passwd varchar(100) not null,
    sesion_token varchar(1000)
);

DROP TABLE IF EXISTS tUrls;
CREATE TABLE tUrls(
	id int primary key not null auto_increment,
	old_route varchar(200) not null,
	new_route varchar(100) not null,
	clicks int not null default 0,
    fcreacion datetime not null,
    creator int not null,
	CONSTRAINT FK_url_creator FOREIGN KEY (creator) REFERENCES tUsers(id)
);
