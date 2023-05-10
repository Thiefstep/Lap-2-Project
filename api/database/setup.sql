DROP TABLE IF EXISTS token CASCADE ;
DROP TABLE IF EXISTS user_account CASCADE;
DROP TABLE IF EXISTS item CASCADE;


CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES user_account("user_id")
);

CREATE TABLE item (
    item_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(50) NOT NULL,
    content VARCHAR (200) NOT NULL,
    price INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO item (title, content, price)
VALUES ('My First Item', 'This is the content of my first item', 10),
 ('My second Item', 'This is the content of my second item', 40.5),
 ('My third Item', 'This is the content of my third item', 54),
 ('My fourth Item', 'This is the content of my first item', 85),
 ('My Fifth Item', 'This is the content of my first item', 987)

