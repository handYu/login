SET NAMES UTF8;
DROP DATABASE IF EXISTS scenic;
CREATE DATABASE scenic CHARSET=UTF8;
USE scenic;
CREATE TABLE user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(64),
	upwd VARCHAR(64),
	email VARCHAR(1108),
	telephone VARCHAR(32),
	message VARCHAR(1400)
);
INSERT INTO user VALUES('NULL','chen','123465','1005494084@qq.com','15645454545','shanghainihao'),
('NULL','wang','654321','1005425987@qq.com','15645455648','shanghainihao'),
('NULL','kai','001225','1005432654@qq.com','15645451654','shanghainihao'),
('NULL','xiao','990921','1005494123@qq.com','15645451575','shanghainihao');