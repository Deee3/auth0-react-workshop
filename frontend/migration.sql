CREATE DATABASE danduser;
CREATE TABLE Authuser (
    id SERIAL,
    username VARCHAR(255),
    userid VARCHAR(255)
);

INSERT INTO Authuser (username,userid) VALUES('marcmenard','asdrw34r');