create table u_comment(
    C_ID int(11) not null,
    C_Content nvarchar(250),
    U_ID int(11) not null,
    B_ID int(11) not null,
    PRIMARY KEY (C_ID),
    FOREIGN KEY (B_ID) REFERENCES book(B_ID),
    FOREIGN KEY (U_ID) REFERENCES user(U_ID)
);

create table u_like(
    U_ID int(11) not null,
    B_ID int(11) not null,
    PRIMARY KEY (U_ID,B_ID),
    FOREIGN KEY (B_ID) REFERENCES book(B_ID),
    FOREIGN KEY (U_ID) REFERENCES user(U_ID)
);

CREATE TABLE `v_book` (
  `B_ID` int(11) NOT NULL AUTO_INCREMENT,
  `B_Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `B_NumberOfPage` int(11) DEFAULT NULL,
  `B_Content` mediumtext,
  `B_Description` text CHARACTER SET utf8,
  `B_Age` int(11) DEFAULT NULL,
  `C_ID` int(11) DEFAULT NULL,
  `U_ID` int(11) DEFAULT NULL,
  `B_PublishDate` date DEFAULT NULL,
  `B_imageurl` varchar(400) DEFAULT NULL,
  `B_audiourl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`B_ID`),
  KEY `C_ID` (`C_ID`),
  KEY `U_ID` (`U_ID`),
  CONSTRAINT `book_ibfk_3` FOREIGN KEY (`C_ID`) REFERENCES `category` (`C_ID`),
  CONSTRAINT `book_ibfk_4` FOREIGN KEY (`U_ID`) REFERENCES `user` (`U_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;