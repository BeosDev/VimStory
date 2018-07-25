-- MySQL dump 10.16  Distrib 10.1.32-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: vimstory
-- ------------------------------------------------------
-- Server version	10.1.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `a_b_relationship`
--

DROP TABLE IF EXISTS `a_b_relationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `a_b_relationship` (
  `B_ID` int(11) NOT NULL,
  `A_ID` int(11) NOT NULL,
  PRIMARY KEY (`B_ID`,`A_ID`),
  KEY `A_ID` (`A_ID`),
  CONSTRAINT `a_b_relationship_ibfk_1` FOREIGN KEY (`B_ID`) REFERENCES `book` (`B_ID`),
  CONSTRAINT `a_b_relationship_ibfk_2` FOREIGN KEY (`A_ID`) REFERENCES `author` (`A_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `a_b_relationship`
--

LOCK TABLES `a_b_relationship` WRITE;
/*!40000 ALTER TABLE `a_b_relationship` DISABLE KEYS */;
/*!40000 ALTER TABLE `a_b_relationship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `author` (
  `A_ID` int(11) NOT NULL AUTO_INCREMENT,
  `A_Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `A_Description` text CHARACTER SET utf8,
  PRIMARY KEY (`A_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Kai','khoa dien'),(2,'tony',''),(3,'Nam','ahhi');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `B_ID` int(11) NOT NULL AUTO_INCREMENT,
  `B_Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `B_NumberOfPage` int(11) DEFAULT NULL,
  `B_Content` mediumtext CHARACTER SET utf8,
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
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`C_ID`) REFERENCES `category` (`C_ID`),
  CONSTRAINT `book_ibfk_2` FOREIGN KEY (`U_ID`) REFERENCES `user` (`U_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (72,'Ice Cube b?n b? bi?n',NULL,'','Ice Cube b?n b? bi?n l? c?u chuy?n v? ch?ng trai da m?u Ice Cube v?i u?c mo tr? th?nh r?p bo h?ng d?u th? gi?i. V?i dam m? ch?y b?ng ...',NULL,NULL,NULL,NULL,'img/ic1.jpg',NULL),(80,NULL,NULL,'bsdjb',NULL,NULL,NULL,NULL,NULL,'img/mask.png',NULL),(81,'asd',NULL,'asd','asd',NULL,NULL,NULL,NULL,'img/regular.jpg',NULL),(82,'',NULL,'<p>Tao v&agrave; m&agrave;y t?ng quen nhau nam l?p 6, sau d&oacute; tao v?i m&agrave;y chia tay. Tao v?n c&ograve;n quy?n luy?n c&aacute;i t&igrave;nh y&ecirc;u v?a ch?m n? d&oacute;. Ng&agrave;y d&oacute; tao bi?t du?c m&agrave;y th&iacute;ch tao, khi gi? th?c h&agrave;nh n?u an, tao b? dau b?ng th&igrave; ch&iacute;nh m&agrave;y l&agrave; ngu?i qan t&acirc;m tao, d&oacute; l&agrave; l&yacute; do tao ch? d?ng quen m&agrave;y. Quen nhau du?c 3 ng&agrave;y th&igrave; m&agrave;y n&oacute;i chia tay, v&agrave; cung ch&iacute;nh l&uacute;c d&oacute; tao d&atilde; kh&oacute;c, r?t nhi?u. C&aacute;i c?m gi&aacute;c ?y nh&oacute;i, tao du?c r?t nhi?u d?a ch?c cu?i, mua k?o cho an nhung v?n kh&ocirc;ng n&iacute;n. V&agrave; r?i tao qu&ecirc;n du?c m&agrave;y nhung kh&ocirc;ng c&ograve;n th&acirc;n v?i m&agrave;y du?c n?a, gi?ng nhu 2 ngu?i xa l?.</p>\r\n\r\n<p><img alt=\"nguoi-la-tung-quen\" src=\"http://www.truyenngan.com.vn/images/Phuongvtm/2014.04/nguoi-la-tung-quen.jpg\" style=\"height:450px; width:600px\" /></p>\r\n\r\n<p>Tao kh&ocirc;ng c&ograve;n luu luy?n m&agrave;y nua m&agrave; th&iacute;ch nhi?u ng?i kh&aacute;c, r?i quen du?c ngu?i t&ecirc;n Gia B?o. Tao quen Gia B?o v&agrave;o m?t ng&agrave;y d?c bi?t, 24-11. Tao g?i Gia B?o l&agrave; ba, v&agrave; choi th&acirc;n ri?t cung th&iacute;ch. T? ng&agrave;y tao quen G.B?o, tao ch? to&agrave;n s?ng trong ng?t ng&agrave;o. R?i tao d&atilde; th&acirc;n l?i du?c v?i m&agrave;y, trong l&ograve;ng tao th?m c?m on B?o nhung c&oacute; ai ng? th&acirc;n l?i v?i m&agrave;y l&agrave; m?t r?c r?i. Tao du?c m&agrave;y nh?n l&agrave;m con v&agrave; k&ecirc;u m&agrave;y b?ng m&aacute;. H?c chung l?p, chung tru?ng Nguy?n Hu? v&agrave; gi? d&acirc;y c&ograve;n h?c chung l?p hoc th&ecirc;m van ? V&acirc;n D?n. Tao v?i m&agrave;y c&oacute; nh?ng k? ni?m d?p v?i nhau, nhung tao c? th&iacute;ch l&agrave;m phi?n m&agrave;y b?ng ti?ng m&aacute;.<br />\r\nV&agrave; c&oacute; 1 ng&agrave;y d&atilde; d? l?i cho tao k? ni?m h?n nhi&ecirc;n, r?t h?n nhi&ecirc;n</p>\r\n\r\n<p>- M&aacute; oi, m&aacute;, m&aacute; .... - tao &yacute; ?i g?i</p>\r\n\r\n<p>- G&igrave; n?a c&ocirc; nuong - m&agrave;y m?t nhan m&agrave;y nh&oacute; tr? l?i</p>\r\n\r\n<p>- Di mua tr&agrave; s?a v?i con di - tao nung</p>\r\n\r\n<p>- S?p h?c r?i, mua g&igrave; n?a - m&agrave;y c? v?y, kh&oacute; chi?u</p>\r\n\r\n<p>- Thoy m&agrave;, mua di - tao l?i nung</p>\r\n\r\n<p>- kh&ocirc;ng</p>\r\n\r\n<p>- Mua</p>\r\n\r\n<p>- Kh&ocirc;ng</p>\r\n\r\n<p>.........</p>\r\n\r\n<p>- Du?c r?i, di nhanh, s?p h?c r?i - m&agrave;y ch?u thua, b?c m&igrave;nh di tru?c</p>\r\n\r\n<p>- M&aacute; , d?i con....</p>\r\n\r\n<p>Tao ch?y thi?t nhanh, l&uacute;c t?i ch? mua tr&agrave; s?a, tao b?o m&agrave;y</p>\r\n\r\n<p>- Bao con nha</p>\r\n\r\n<p>- G&igrave; ??? C&ocirc; nuong ru tui di c&ograve;n k&ecirc;u bao nua h&atilde; ?</p>\r\n\r\n<p>- ?, m&aacute; nha</p>\r\n\r\n<p>- Du?c r?i, hum nay th&ocirc;i &aacute;</p>\r\n\r\n<p>- Thuong m&aacute; nh?t</p>\r\n\r\n<p>- Tr&aacute;nh xa tui ra, tui l&agrave; con trai, ch?ng c&ocirc; m&agrave; bi?t c&ocirc; c? d&iacute;nh tui v?y n&oacute; qu&aacute;nh tui ch?t</p>\r\n\r\n<p>- M&aacute; y&ecirc;n t&acirc;m, m&aacute; l&agrave; m&aacute; c?a con, b?o h&ocirc;ng d&aacute;m l&agrave;m g&igrave; m&aacute; d&acirc;u</p>\r\n\r\n<p>M&agrave;y ch? bi?t cu?i</p>\r\n\r\n<p>- Dau b?ng qu&aacute; m&aacute; oi, di WC v?i con</p>\r\n\r\n<p>- Di 1 m&igrave;nh di - M&agrave;y g?ng t?ng ch?</p>\r\n\r\n<p>- L&agrave;m nhu con c?n m&aacute; l?m v?y, t?i ngu?i ta s? ma thoy</p>\r\n\r\n<p>- Di...</p>\r\n\r\n<p>Sau l&uacute;c tao dau b?ng th&igrave; t?i m&agrave;y, ch? t?i 2 ly tr&agrave; s?a th&ocirc;i. m&agrave; v? nh&agrave;, m? c?a m&agrave;y c&ograve;n mua th&ecirc;m tr&agrave; s?a cho 2 anh em m&agrave;y u?ng, h?u qu? l&agrave; m&agrave;y th?c nguy&ecirc;n d&ecirc;m</p>\r\n\r\n<p>***</p>\r\n\r\n<p>Tao v&agrave; m&agrave;y kh&ocirc;ng c&ograve;n g?i m&aacute; con n?a v&igrave; m&agrave;y h&ocirc;ng ch?u, tao cung l&agrave;m theo, xung h&ocirc; v?i m&agrave;y b?ng m&agrave;y tao.</p>\r\n\r\n<p>Tao v&agrave; m&agrave;y m&atilde;i l&agrave; b?n th&acirc;n. C&acirc;u n&oacute;i ?y d?n bi?n m?t v&igrave; h&igrave;nh nhu tao d&atilde; y&ecirc;u r?i.</p>\r\n\r\n<p>Tao quen B?o v&agrave; v?n th&acirc;n v?i m&agrave;y. M&agrave;y n&oacute;i tao bu?ng b?nh v&agrave; m?p nhung b&ugrave; l?i v?n choi v?i tao. Tao v&agrave; m&agrave;y v?n hay gi?n d?i nhung l?i hu?. Tao chia tay B?o. C&aacute;ch d&oacute; 3 ng&agrave;y m&agrave;y n&oacute;i m&agrave;y th&iacute;ch tao, tao nh?n du?c l?i n&oacute;i d&oacute; cung r?t vui, kh&ocirc;ng bi?t sao l?i vui. V&agrave; r?i tao quy?t d?nh chia tay B?o, c&oacute; rth? 1 ph?n v&igrave; m&agrave;y. T? ng&agrave;y tao chia tay b?o t&igrave;nh b?ng gi?a tao v?i m&agrave;y kh&ocirc;ng c&ograve;n g?i l&agrave; &quot;B?N TH&Acirc;N&quot; nua r?i. V&agrave; r?i m&agrave;y bi?t tao th&iacute;ch m&agrave;y.</p>\r\n\r\n<p>D&atilde; t?i sinh nh?t m&agrave;y, di xem phim, tao c? nh&igrave;n m&agrave;y ho&agrave;i, t?i b?n th?y du?c v&agrave; ch?c tao. V&agrave; c&oacute; l? sinh nh?t m&agrave;y l&agrave; l?n cu?i tao v&agrave; m&agrave;y l&agrave; b?n v&igrave; t? gi? tao v?i m&agrave;y s? l&agrave; ngu?i dung. Tao h?i m&agrave;y l&agrave; n?u tao h?t th&iacute;ch m&agrave;y th&igrave; tao c&oacute; th? l&agrave;m b?n v?i m&agrave;y nhu xua, nhung m&agrave;y l?i quang cho tao ch? &quot;KH&Ocirc;NG&quot; chua x&oacute;t. ? th&igrave; ngu?i dung.</p>\r\n\r\n<p>Gi?t nu?c m?t tao lan d&agrave;i. M&agrave;y l&agrave; ngu?i con trai d?u ti&ecirc;n l&agrave;m tao kh&oacute;c r?t nhi?u. M&agrave;y bu?c v&agrave;o cu?c d?i tao v&agrave; ra di d? l?i cho tao 2 ch? ngu?i dung xa l?. L?i 1 l?n n?a tao v?i m&agrave;y l&agrave; ngu?i dung. Gi&aacute; nhu tao kh&ocirc;ng ngh? h?c th&ecirc;m van th&igrave; tao v?i m&agrave;y d&acirc;u nhu v?y. Tao d&atilde; tu?ng ch?ng nhu tao v&agrave; m&agrave;y c&oacute; th? l&agrave; b?n th&acirc;n l?m nhung ai ng?.... Nh?ng m?ng u?c c?a tao d?p qua 1 b&ecirc;n di v&igrave; gi? d&acirc;y tao v?i m&agrave;y l&agrave; ngu?i dung. Tao gh&eacute;t m&agrave;y con ngu?i vong on, c&aacute;i g&igrave; tao cung l&agrave;m v&igrave; m&agrave;y d? r?i m&agrave;y tr? cho tao c&aacute;i g&igrave; ngo&agrave;i 2 ch? &quot;NGU?I DUNG&quot;</p>\r\n\r\n<p>Tao d&atilde; h?a l&agrave; s? kh&oacute;c nhung ch? 1 l?n n&agrave;y n?a r?i th&ocirc;i. Gi?t nu?c m?t c?a tao s? kh&ocirc;ng tr? n&ecirc;n v&ocirc; &iacute;ch v&igrave; m&agrave;y n?a. Tao s? t&igrave;m cho m&igrave;nh 1 h?nh ph&uacute;c kh&aacute;c kh&ocirc;ng ph?i m&agrave;y. Nhung ri&ecirc;ng tao d?i v?i m&agrave;y s? m&atilde;i m&atilde;i l&agrave; b?n th&acirc;n. M&agrave;y s? m&atilde;i thu?c v&egrave; m?t ph?n k&iacute; ?c d?p d? c?a tao. Tao d&atilde; t?ng th&iacute;k v&agrave; quen r?t nhi?u ngu?i tru?c m&agrave;y, nhung m&agrave;y m?i d&iacute;ch th?c l&agrave; ngu?i d?u ti&ecirc;n tao y&ecirc;u th?t l&ograve;ng. Cho tao nh? m&agrave;y nh&eacute;, cho tao kh&oacute;c v&igrave; m&agrave;y nh&eacute;, 1 l?n n?a th&ocirc;i, r?i s? qu&ecirc;n.</p>\r\n\r\n<p>T?M BI?T M&Agrave;Y, NGU?I L? T?NG QUEN</p>\r\n\r\n<p>&nbsp;</p>\r\n',NULL,NULL,NULL,NULL,NULL,'img/',NULL),(85,'?d',NULL,'<p>sadasdasdasdasdasdasd</p>\r\n',NULL,NULL,NULL,NULL,NULL,'img/',NULL),(87,'sd',NULL,'<p>asd</p>\r\n',NULL,NULL,NULL,NULL,NULL,'img/',NULL),(156,'Chào',NULL,'<p>Ch&agrave;o bạn t&ocirc;i đi ngủ</p>\r\n','Chào bạn tôi đi ngủ',0,1,NULL,'0000-00-00','img/','156.mp3');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `C_ID` int(11) NOT NULL AUTO_INCREMENT,
  `C_Name` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`C_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Than thoai'),(2,'co tich'),(3,'ngon tinh'),(4,'kiem hiep'),(5,'tien hiep'),(6,'unknown'),(7,'unknown'),(8,'unknown');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `u_comment`
--

DROP TABLE IF EXISTS `u_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `u_comment` (
  `C_ID` int(11) NOT NULL,
  `C_Content` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `U_ID` int(11) NOT NULL,
  `B_ID` int(11) NOT NULL,
  PRIMARY KEY (`C_ID`),
  KEY `B_ID` (`B_ID`),
  KEY `U_ID` (`U_ID`),
  CONSTRAINT `u_comment_ibfk_1` FOREIGN KEY (`B_ID`) REFERENCES `book` (`B_ID`),
  CONSTRAINT `u_comment_ibfk_2` FOREIGN KEY (`U_ID`) REFERENCES `user` (`U_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `u_comment`
--

LOCK TABLES `u_comment` WRITE;
/*!40000 ALTER TABLE `u_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `u_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `u_like`
--

DROP TABLE IF EXISTS `u_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `u_like` (
  `U_ID` int(11) NOT NULL,
  `B_ID` int(11) NOT NULL,
  PRIMARY KEY (`U_ID`,`B_ID`),
  KEY `B_ID` (`B_ID`),
  CONSTRAINT `u_like_ibfk_1` FOREIGN KEY (`B_ID`) REFERENCES `book` (`B_ID`),
  CONSTRAINT `u_like_ibfk_2` FOREIGN KEY (`U_ID`) REFERENCES `user` (`U_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `u_like`
--

LOCK TABLES `u_like` WRITE;
/*!40000 ALTER TABLE `u_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `u_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `U_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `U_Authorization` tinyint(2) DEFAULT NULL,
  `U_FullName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `U_Address` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `U_Phone` varchar(12) DEFAULT NULL,
  `U_Sex` tinyint(2) DEFAULT NULL,
  `U_Email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`U_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','$2a$10$8AZmP6X4WFinEfOLOAYc1.EvtqxhPNnh4ZpVYkOWsKtXt5kdtHn5a',1,'admin','','',1,'admin@admin.com'),(2,'test','test',0,'test','','',1,'test@test.com'),(3,'linh','123',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `v_book`
--

DROP TABLE IF EXISTS `v_book`;
/*!50001 DROP VIEW IF EXISTS `v_book`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `v_book` (
  `B_ID` tinyint NOT NULL,
  `B_Name` tinyint NOT NULL,
  `B_Content` tinyint NOT NULL,
  `B_Description` tinyint NOT NULL,
  `B_Age` tinyint NOT NULL,
  `C_Name` tinyint NOT NULL,
  `B_PublishDate` tinyint NOT NULL,
  `B_imageurl` tinyint NOT NULL,
  `B_audiourl` tinyint NOT NULL,
  `U_ID` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'vimstory'
--
/*!50003 DROP PROCEDURE IF EXISTS `deleteBook` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteBook`(IN bookid int)
BEGIN
  DELETE FROM a_b_relationship WHERE B_ID = bookid;
  DELETE FROM book WHERE B_ID = bookid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteCategory`(IN id int)
BEGIN
update book set C_ID = 8 where C_ID = id;
    delete from category where C_ID = id; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `lastPageNumber` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `lastPageNumber`(IN pageLimit tinyint)
BEGIN
select round(count(B_ID)/pageLimit) as LastPageNumber from book;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `pageNumber` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `pageNumber`(IN page tinyint, IN keyword nvarchar(128))
BEGIN
select * from book where B_Name like CONCAT('%',keyword,'%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `searchAllBooks` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `searchAllBooks`(IN keyword varchar(128))
BEGIN
select * from book where B_Name like CONCAT('%',keyword,'%');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `searchBook` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `searchBook`(IN pageNumber tinyint,
IN recordLimit tinyint,
IN keyword nvarchar(128)
)
BEGIN
Declare recordNumber tinyint;
    set recordNumber = (pageNumber-1)*9;
select * from book where B_Name like CONCAT(CONCAT('%',keyword),'%') limit recordNumber,recordLimit;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `v_book`
--

/*!50001 DROP TABLE IF EXISTS `v_book`*/;
/*!50001 DROP VIEW IF EXISTS `v_book`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_book` AS select `book`.`B_ID` AS `B_ID`,`book`.`B_Name` AS `B_Name`,`book`.`B_Content` AS `B_Content`,`book`.`B_Description` AS `B_Description`,`book`.`B_Age` AS `B_Age`,`category`.`C_Name` AS `C_Name`,date_format(`book`.`B_PublishDate`,'%m/%d/%Y') AS `B_PublishDate`,`book`.`B_imageurl` AS `B_imageurl`,`book`.`B_audiourl` AS `B_audiourl`,`book`.`U_ID` AS `U_ID` from (`book` join `category` on((`book`.`C_ID` = `category`.`C_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-26  0:31:15
