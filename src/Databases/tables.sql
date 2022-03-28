create table users(
    idUsers INT NOT NULL auto_increment,
    names VARCHAR(50),
    email VARCHAR(50),
    groupLevel INT,
    results INT,
    PRIMARY KEY (idUsers),
    FOREIGN KEY (groupLevel) REFERENCES Groups(idGroups),
    FOREIGN KEY (results) REFERENCES results(idResults),
);
 create table Groups(
    idGroups INT NOT NULL AUTO_INCREMENT,
    groupLevel VARCHAR(50)
);
 create table result(
    idResults INT NOT NULL auto_increment,
    resultYear INT(10),
    comprehension INT(10),
    fluency INT(10),
    Structure INT(10),
    pronunciation INT(10),
    monolingualism INT(10),
    englishLevel INT(10)
)