# ************************************************************
# Sequel Ace SQL dump
# Version 20033
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 5.7.38)
# Database: school_management
# Generation Time: 2022-07-13 06:17:13 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table annual_exams
# ------------------------------------------------------------

DROP TABLE IF EXISTS `annual_exams`;

CREATE TABLE `annual_exams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `section_id` varchar(255) NOT NULL,
  `school_year` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table class
# ------------------------------------------------------------

DROP TABLE IF EXISTS `class`;

CREATE TABLE `class` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `teacherId` varchar(255) DEFAULT NULL,
  `level` int(11) NOT NULL DEFAULT '1',
  `school_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;

INSERT INTO `class` (`id`, `name`, `section`, `teacherId`, `level`, `school_id`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','Sil B','fr','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w',1,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.Q0UxIEI.UTpihmB-5GQdmBP-NkBMZlZNx-EEAvb5hWe7bn9vsLk','CE1 B','fr','eyJhbGciOiJIUzI1NiJ9.dGVlZQ.mNKPg0q2TWBuSiwJuKzAgBMSPGUBoJWVcFUna93mQXs',3,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','Class 1','en','eyJhbGciOiJIUzI1NiJ9.bGxsbGw.5-W5rvE0mESNVGDruW3aY_zt_6zSiZXFT7Yupx8WiqI',1,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.Q0UyIEE.LxKJf3O-NG5tJJRC9byuUexbIubmCB7qvUGsf8ghLdY','CE2 A','fr','eyJhbGciOiJIUzI1NiJ9.bGxsbGw.5-W5rvE0mESNVGDruW3aY_zt_6zSiZXFT7Yupx8WiqI',4,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.bGxsbGw.5-W5rvE0mESNVGDruW3aY_zt_6zSiZXFT7Yupx8WiqI','CE2A','fr','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q',4,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.Z2JiZw.cirmzP3yNWf0s_dB06uVgIbThs1et4KR2OUIshRp2Y8','Sil A','fr',NULL,1,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.aGht.f2B0ch_G3XgDxkj_cCdlzYXYf1AjhMGsiHgr_eh1yg4','Test','ma',NULL,2,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.ZmRm.IJKLpRDRSG5Sb4P6kJcgB2pTOM8etd_mOz4V4DcSzrc','fdf','9',NULL,1,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU');

/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table com
# ------------------------------------------------------------

DROP TABLE IF EXISTS `com`;

CREATE TABLE `com` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `com` WRITE;
/*!40000 ALTER TABLE `com` DISABLE KEYS */;

INSERT INTO `com` (`id`, `name`, `section`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAx.O6mhOhIp-XqkRK0yc74aS49FLbqcX0ANPs6MPSAxcQo','Competence 1','fr'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAy.C9MYUKISqcYCkYluHhHN7req0xTZN5isGM9nXIA6WhE','Competence 2','fr');

/*!40000 ALTER TABLE `com` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table matiere
# ------------------------------------------------------------

DROP TABLE IF EXISTS `matiere`;

CREATE TABLE `matiere` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `comId` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `matiere` WRITE;
/*!40000 ALTER TABLE `matiere` DISABLE KEYS */;

INSERT INTO `matiere` (`id`, `name`, `slug`, `section`, `comId`, `tags`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Competence 1A: Francais','Apprendre le francais','fr','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAx.O6mhOhIp-XqkRK0yc74aS49FLbqcX0ANPs6MPSAxcQo','[{\"name\":\"Orale\",\"over\":5},{\"name\":\"Ecrit\",\"over\":5},{\"name\":\"Savoir Etre\",\"over\":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Competence 1B: Anglais','Apprendre l\'anglais','fr','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAx.O6mhOhIp-XqkRK0yc74aS49FLbqcX0ANPs6MPSAxcQo','[{\"name\":\"Orale\",\"over\":5},{\"name\":\"Ecrit\",\"over\":5},{\"name\":\"Savoir Etre\",\"over\":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Competence 1C: Langue Nationale','Apprendre la lange nationale','fr','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAx.O6mhOhIp-XqkRK0yc74aS49FLbqcX0ANPs6MPSAxcQo','[{\"name\":\"Orale\",\"over\":5},{\"name\":\"Ecrit\",\"over\":5},{\"name\":\"Savoir Etre\",\"over\":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Competence 2A: Maths','Mathematiques','fr','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAy.C9MYUKISqcYCkYluHhHN7req0xTZN5isGM9nXIA6WhE','[{\"name\":\"Orale\",\"over\":5},{\"name\":\"Ecrit\",\"over\":\"5\"},{\"name\":\"Savoir Etre\",\"over\":\"5\"},{\"name\":\"Pratique\",\"over\":15}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Competence 2C: Science','Science','fr','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAy.C9MYUKISqcYCkYluHhHN7req0xTZN5isGM9nXIA6WhE','[{\"name\":\"Orale\",\"over\":\"5\"},{\"name\":\"Ecrit\",\"over\":5},{\"name\":\"Savoir Etre\",\"over\":5},{\"name\":\"Pratique\",\"over\":15}]');

/*!40000 ALTER TABLE `matiere` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table notes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `notes`;

CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` varchar(255) DEFAULT NULL,
  `exam_id` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `matiere_id` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `school_year` varchar(255) NOT NULL DEFAULT '2022',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;

INSERT INTO `notes` (`id`, `student_id`, `exam_id`, `class_id`, `matiere_id`, `tag_name`, `value`, `school_year`)
VALUES
	(1,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Orale','2','2022'),
	(2,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Ecrit','4','2022'),
	(3,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Ecrit','1','2022'),
	(4,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Orale','3','2022'),
	(5,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Orale','4','2022'),
	(6,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Ecrit','2','2022'),
	(7,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Savoir Etre','2','2022'),
	(8,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Orale','4','2022'),
	(9,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Ecrit','2','2022'),
	(10,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Savoir Etre','4','2022'),
	(11,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Orale','2','2022'),
	(12,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Ecrit','4','2022'),
	(13,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Savoir Etre','2','2022'),
	(14,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Orale','4','2022'),
	(15,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Ecrit','2','2022'),
	(16,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Savoir Etre','4','2022'),
	(17,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Pratique','2','2022'),
	(18,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Orale','4','2022'),
	(19,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Ecrit','2','2022'),
	(20,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Savoir Etre','4','2022'),
	(21,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Pratique','4','2022'),
	(22,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Orale','4','2022'),
	(23,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Ecrit','2','2022'),
	(24,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Savoir Etre','2','2022'),
	(25,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Orale','2','2022'),
	(26,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Ecrit','2','2022'),
	(27,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Savoir Etre','2','2022'),
	(28,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Orale','2','2022'),
	(29,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Ecrit','2','2022'),
	(30,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Savoir Etre','2','2022'),
	(31,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Orale','2','2022'),
	(32,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Ecrit','2','2022'),
	(33,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Savoir Etre','2','2022'),
	(34,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Pratique','15','2022'),
	(35,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Orale','2','2022'),
	(36,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Ecrit','2','2022'),
	(37,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Savoir Etre','2','2022'),
	(38,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Pratique','14','2022'),
	(39,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Orale','5','2022'),
	(40,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Ecrit','5','2022'),
	(41,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Savoir Etre','5','2022'),
	(42,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Orale','5','2022'),
	(43,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Ecrit','5','2022'),
	(44,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Savoir Etre','5','2022'),
	(45,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Pratique','14','2022'),
	(46,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Orale','5','2022'),
	(47,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Ecrit','5','2022'),
	(48,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Savoir Etre','5','2022'),
	(49,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Pratique','12','2022'),
	(50,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Orale','4','2022'),
	(51,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Ecrit','4','2022'),
	(52,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Savoir Etre','4','2022'),
	(53,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Orale','4','2022'),
	(54,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Ecrit','4','2022'),
	(55,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA','Savoir Etre','4','2022'),
	(56,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Orale','4','2022'),
	(57,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Ecrit','4','2022'),
	(58,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U','Savoir Etre','4','2022'),
	(59,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Orale','4','2022'),
	(60,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Ecrit','4','2022'),
	(61,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Savoir Etre','4','2022'),
	(62,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0','Pratique','14','2022'),
	(63,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Orale','4','2022'),
	(64,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Ecrit','4','2022'),
	(65,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Savoir Etre','4','2022'),
	(66,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4','Pratique','10','2022'),
	(67,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM','Savoir Etre','5','2022');

/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table schools
# ------------------------------------------------------------

DROP TABLE IF EXISTS `schools`;

CREATE TABLE `schools` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `secret_code` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `schools` WRITE;
/*!40000 ALTER TABLE `schools` DISABLE KEYS */;

INSERT INTO `schools` (`id`, `name`, `secret_code`, `created_at`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','La semence','$2b$10$/lG72..EAFI.aPBzKYYfa.9CM2cSRbtibsshpaoqRn4x36GEY80Oy','2022-06-26 12:27:44');

/*!40000 ALTER TABLE `schools` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sections
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sections`;

CREATE TABLE `sections` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;

INSERT INTO `sections` (`id`, `name`, `type`)
VALUES
	(7,'Test',2),
	(9,'fafa',3);

/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table seq
# ------------------------------------------------------------

DROP TABLE IF EXISTS `seq`;

CREATE TABLE `seq` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `seq` WRITE;
/*!40000 ALTER TABLE `seq` DISABLE KEYS */;

INSERT INTO `seq` (`id`, `name`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk','Sequence 1'),
	('eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE','Sequence 2');

/*!40000 ALTER TABLE `seq` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table settings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `settings`;

CREATE TABLE `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_editable` varchar(10) NOT NULL DEFAULT 'no',
  `year_school` year(4) NOT NULL,
  `school_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;

INSERT INTO `settings` (`id`, `is_editable`, `year_school`, `school_id`)
VALUES
	(1,'yes','2022','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU');

/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table stats
# ------------------------------------------------------------

DROP TABLE IF EXISTS `stats`;

CREATE TABLE `stats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` varchar(255) NOT NULL,
  `class_id` varchar(255) NOT NULL,
  `exam_id` varchar(255) NOT NULL,
  `totalPoints` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `stats` WRITE;
/*!40000 ALTER TABLE `stats` DISABLE KEYS */;

INSERT INTO `stats` (`id`, `student_id`, `class_id`, `exam_id`, `totalPoints`)
VALUES
	(1,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE',86),
	(2,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk',52),
	(3,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk',61),
	(4,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.dHJpbWVzdHJlIDI.9-jgMf0pA9K2fsEBUhi-GGVCnZDNqCLVJXCaDhIJy3Y',69),
	(5,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.dHJpbWVzdHJlIDI.9-jgMf0pA9K2fsEBUhi-GGVCnZDNqCLVJXCaDhIJy3Y',73),
	(6,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE',84),
	(7,'eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.VHJpbWVzdHJlIDE.6OgKfkiSb6MkH1Wch5pJLHfSCkOAiV0C4XMXsSbcZtw',73),
	(8,'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','eyJhbGciOiJIUzI1NiJ9.VHJpbWVzdHJlIDE.6OgKfkiSb6MkH1Wch5pJLHfSCkOAiV0C4XMXsSbcZtw',73);

/*!40000 ALTER TABLE `stats` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table students
# ------------------------------------------------------------

DROP TABLE IF EXISTS `students`;

CREATE TABLE `students` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `subname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `birthday_place` varchar(255) DEFAULT NULL,
  `school_year` varchar(255) NOT NULL DEFAULT '2022',
  `status` varchar(255) DEFAULT 'old',
  `school_id` varchar(255) NOT NULL,
  `fatherName` varchar(255) NOT NULL,
  `profession` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;

INSERT INTO `students` (`id`, `name`, `subname`, `email`, `phone_number`, `class_id`, `sex`, `birthday`, `birthday_place`, `school_year`, `status`, `school_id`, `fatherName`, `profession`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI','Testons','Con','hhjkkl@jjj.co','88888888888','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','f','2022-05-03 00:00:00','','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('eyJhbGciOiJIUzI1NiJ9.bGxsbGw.5-W5rvE0mESNVGDruW3aY_zt_6zSiZXFT7Yupx8WiqI','lllll','fddd','ffff@ggg.jj','655773402','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','f','2022-06-18 00:00:00','','2024','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('eyJhbGciOiJIUzI1NiJ9.bGxsbGw.5-W5rvE0mESNVGDruW3aY_zt_6zSiZXFT7Yupx8WiqI','lllll','fddd','ffff@ggg.jj','655773402','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','f','2022-06-18 00:00:00','','2024','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('eyJhbGciOiJIUzI1NiJ9.dGVzdDIwMjI.vKVFPFXiqwtEoz2cp1odcnAk2UgKRxMqKLRn5WrO9aM','test','test','test@gmail.com','65555555','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','m','2022-07-06 00:00:00','bertoua','2022','old','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','tester','tester'),
	('eyJhbGciOiJIUzI1NiJ9.Z2RmZzIwMjI.56Zc2bJhpPp39dXwTOlzdfp2WMudXL1Fhy9w3qq0Gyk','gdfg','','','','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','',NULL,'','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','gdgfdg','');

/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table teachers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `teachers`;

CREATE TABLE `teachers` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `subname` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `matricule` varchar(255) DEFAULT NULL,
  `password` varchar(10) DEFAULT '00000',
  `sex` varchar(255) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `school_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;

INSERT INTO `teachers` (`id`, `name`, `subname`, `class_id`, `matricule`, `password`, `sex`, `birthday`, `phone_number`, `school_id`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.bGR3ZWQ.8-vlz1RV44_A9aLGF7wJuZ5_ApsNOzk-od2SwNEkb9M','CE1 ffff','sfdffdsfdfsfff','eyJhbGciOiJIUzI1NiJ9.Z2JiZw.cirmzP3yNWf0s_dB06uVgIbThs1et4KR2OUIshRp2Y8','SEM-SILA','1795','m','2022-07-01 00:00:00','ffdfsfdsf','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.ZGRk.i-WTaTAqrBc50-UIf_mc28J8ngzylHDryCGqEePGALg','Teacher','dddd','eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q','SEM-SILB','2978','m','2022-07-20 00:00:00','9888888888','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.ZmRzZGZzZmRzZnNkZg.5fIah07li1WpSAv4sN1uuEu4Roh12P80lp38b7F5p1o','test','test','eyJhbGciOiJIUzI1NiJ9.bGxsbGw.5-W5rvE0mESNVGDruW3aY_zt_6zSiZXFT7Yupx8WiqI','SEM-CE2A','1839','m','2022-07-22 00:00:00','888888888','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.dGVlZQ.mNKPg0q2TWBuSiwJuKzAgBMSPGUBoJWVcFUna93mQXs','teee','','eyJhbGciOiJIUzI1NiJ9.Q0UxIEI.UTpihmB-5GQdmBP-NkBMZlZNx-EEAvb5hWe7bn9vsLk','SEM-CE1B','3783','m',NULL,'','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU');

/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table trims
# ------------------------------------------------------------

DROP TABLE IF EXISTS `trims`;

CREATE TABLE `trims` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `seqIds` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `trims` WRITE;
/*!40000 ALTER TABLE `trims` DISABLE KEYS */;

INSERT INTO `trims` (`id`, `name`, `seqIds`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.VHJpbWVzdHJlIDE.6OgKfkiSb6MkH1Wch5pJLHfSCkOAiV0C4XMXsSbcZtw','Trimestre 1','[\"eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk\",\"eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE\"]'),
	('eyJhbGciOiJIUzI1NiJ9.dHJpbWVzdHJlIDI.9-jgMf0pA9K2fsEBUhi-GGVCnZDNqCLVJXCaDhIJy3Y','trimestre 2','[\"eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk\",\"eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE\"]');

/*!40000 ALTER TABLE `trims` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `school_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `username`, `email`, `password`, `school_id`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.RGFuaWVs.C0nMogGqNpgUB0kEWLT9R81KQOgXGXt2Cz2saXnTPus','Daniel','danidjakam@gmail.com','danilo','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.ZGFuaWxvZXlKaGJHY2lPaUpJVXpJMU5pSjkuVEdFZ2MyVnRaVzVqWlEuZlJ3REZKM0wyUFZta1VxTjRqZDJmVk02a2JUTV80M0JiMUxTRk1MT09HVQ.8WvIeDTyRvmKfsiYRNWtLrN5Ux8mvGk_Vx_en-H5Rxg','danilo','danidjakam@gmail.com','$2b$10$Md/15AWmgwIbdtsBtjy1H.BpNX06XxZDWvvK2IXvYXtsSLYIQj1t2','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
