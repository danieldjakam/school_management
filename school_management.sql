# ************************************************************
# Sequel Ace SQL dump
# Version 20033
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 5.7.38)
# Database: school_management
# Generation Time: 2022-07-20 18:15:53 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table activities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `activities`;

CREATE TABLE `activities` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `domainId` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `appreciationsNber` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;

INSERT INTO `activities` (`id`, `name`, `domainId`, `section`, `appreciationsNber`)
VALUES
	(2,'Story Telling','5','11',4),
	(3,'Poetry/Rhymes','5','11',4),
	(4,'Sign Language/Gesture','5','11',4),
	(5,'Reading','5','11',4),
	(6,'Writing','5','11',4),
	(7,'National Language','5','11',4),
	(8,'Mathematics','6','11',4),
	(9,'ICT','6','11',4),
	(10,'Sensory and Perceptive Education','6','11',4),
	(11,'Science and Technology','6','11',4),
	(12,'Agriculture','6','11',4),
	(13,'Citizenship','7','11',4),
	(14,'Character Education','7','11',4),
	(15,'Environmental Education','7','11',4),
	(16,'Safety Education','7','11',4),
	(17,'Health and Nutrition Education','7','11',4),
	(18,'Music and Dance','8','11',4),
	(19,'Drawing and Colouring','8','11',4),
	(20,'Painting','8','11',4),
	(21,'Hand Work','8','11',4),
	(22,'Athletics','9','11',4),
	(23,'Langage','10','12',3),
	(24,'Contes','10','12',3),
	(25,'Poésies-Comptine','10','12',3),
	(26,'Initiation à la lecture/écriture','10','12',3),
	(27,'Graphisme','10','12',3),
	(28,'Expression gestuelle','10','12',3),
	(29,'Langue nationale','10','12',3),
	(30,'English','10','12',3),
	(31,'Mathématiques','11','12',3),
	(32,'TIC','11','12',3),
	(33,'Education sensorielle et perception','11','12',3),
	(34,'Sciences et technologies','11','12',3),
	(35,'Activités agro-pastorales','11','12',3),
	(37,'Education civique et morale','12','12',3),
	(38,'Education à l\'environnement','12','12',3),
	(39,'Education à la sécurité','12','12',3),
	(40,'Education à la santé','12','12',3),
	(41,'Dessin et coloriage','13','12',3),
	(42,'Peinture','13','12',3),
	(43,'Peinture','13','12',3),
	(44,'Activités manuelles','13','12',3),
	(45,'Musique, chant et danse','13','12',3),
	(46,'Athlétisme','14','12',3),
	(47,'Gymnastique','14','12',3),
	(48,'Jeux collectifs','14','12',3);

/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table annual_exams
# ------------------------------------------------------------

DROP TABLE IF EXISTS `annual_exams`;

CREATE TABLE `annual_exams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
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
	('eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','Nursery 1','11','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA',1,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','Petite Section','12','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI',1,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','Class 1','13','eyJhbGciOiJIUzI1NiJ9.VGVhY2hlcjM.twbEJkwDQ_yttHI_9LEs6dka2vttFniL-pdU9mobHu8',1,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','SIL B','14','eyJhbGciOiJIUzI1NiJ9.VGVhY2hlciA0.uMdiVbnJg8i_txJ8rGfMsFzRPmBgvn361ssqElYr7v4',1,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','CM2','15','eyJhbGciOiJIUzI1NiJ9.VGVhY2hlciA1.CKdxg5D6I351K68rVETWjRHNEqeFcp_Fy_lsve_orUo',1,'eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU');

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
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDEgQ09NTVVOSVFVRVIgRU4gRlJBTkNBSVMsIEFOR0xBSVMgRVQgUFJBVElRVUVSIEFVIE1PSU5TIFVORSBMQU5HVUUgTkFUSU9OQUxF.kpUN4UzISGO6iEtqIJS9Nz5Be4lFvRM7EhG1W4wUEcM','COMPETENCE : 1 COMMUNIQUER EN FRANCAIS, ANGLAIS ET PRATIQUER AU MOINS UNE LANGUE NATIONALE','14'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDIgVVRJTElTRVIgTEVTIE5PVElPTlMgREUgQkFTRSBFTiBNQVRIRU1BVElRVUVTLCBTQ0lFTkNFUyBFVCBURUNITk9MT0dJRQ.MBAF6e7Bznq7EmDcWDn9Qq499vr1nRQhsgULQpFoF6U','COMPETENCE : 2 UTILISER LES NOTIONS DE BASE EN MATHEMATIQUES, SCIENCES ET TECHNOLOGIE','14'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDMgUFJBVElRVUVSIExFUyBWQUxFVVJTIFNPQ0lBTEVTIEVUIENJVE9ZRU5ORVM.GSDRT3c90q8EcaY4580ThB_Oe1pA-1l3N5clZZmmg_c','COMPETENCE : 3 PRATIQUER LES VALEURS SOCIALES ET CITOYENNES','14'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDQgREVNT05UUkVSIEwnQVVUT05PTUlFLCBMJ0VTUFJJVCBEJ0lOSVRJQVRJVkUsIERFIENSRUFUSVZJVEUgRVQgRCdFTlRSRVBSRU5FVVJJQVQ.gqLcihEAZIqixkx3iPcegM7BVLk44CmpXGetsR3Ufew','COMPETENCE : 4 DEMONTRER L\'AUTONOMIE, L\'ESPRIT D\'INITIATIVE, DE CREATIVITE ET D\'ENTREPRENEURIAT','14'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDUgVVRJTElTRVIgTEVTIENPTkNFUFRTIERFIEJBU0UgRVQgTEVTIE9VVElMUyBUSUNT.6wnh6Shxco7RkLJImnMd_yHo32qWewfMCFO0Q3idRSM','COMPETENCE : 5 UTILISER LES CONCEPTS DE BASE ET LES OUTILS TICS','14'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDYgUFJBVElRVUVSIExFUyBBQ1RJVklURVMgUEhZU0lRVUVTLCBTUE9SVElWRVMgRVQgQVJUSVNUSVFVRVM.JvZHtbJlxyr9TA3HdKEJuT98IWYrhbL9jcS3oZfvyaE','COMPETENCE : 6 PRATIQUER LES ACTIVITES PHYSIQUES, SPORTIVES ET ARTISTIQUES','14');

/*!40000 ALTER TABLE `com` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table domains
# ------------------------------------------------------------

DROP TABLE IF EXISTS `domains`;

CREATE TABLE `domains` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

LOCK TABLES `domains` WRITE;
/*!40000 ALTER TABLE `domains` DISABLE KEYS */;

INSERT INTO `domains` (`id`, `name`, `section`)
VALUES
	(5,'LITERACY AND COMMUNICATION','11'),
	(6,'SCIENCE AND TECHNOLOGICAL SKILL DEVELOPMENT','11'),
	(7,'PRACTICAL LIFE SKILLS','11'),
	(8,' ARTS AND CRAFT','11'),
	(9,'MOTOR SKILLS','11'),
	(10,'LANGUE ET COMMUNICATION','12'),
	(11,'EVEIL SCIENTIFIQUE ET TECHNOLOGIQUE','12'),
	(12,'VIE COURANTE','12'),
	(13,'CREATION ARTISTIQUE','12'),
	(14,'MOTRICITE','12');

/*!40000 ALTER TABLE `domains` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table notes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `notes`;

CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` varchar(255) DEFAULT NULL,
  `exam_id` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `sub_com_id` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `school_year` varchar(255) NOT NULL DEFAULT '2022',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;

INSERT INTO `notes` (`id`, `student_id`, `exam_id`, `class_id`, `sub_com_id`, `tag_name`, `value`, `school_year`)
VALUES
	(1,'13','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgMUEgQ29tbXVuaXF1ZXIgZW4gRnJhbsOnYWlz.bxErp9usfBcm5NMaDa8bj86m6f4d0YOIg8Fi-Yo5u7s','Orale','1','2022'),
	(2,'16','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgMUEgQ29tbXVuaXF1ZXIgZW4gRnJhbsOnYWlz.bxErp9usfBcm5NMaDa8bj86m6f4d0YOIg8Fi-Yo5u7s','Orale','0','2022'),
	(3,'13','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgMUEgQ29tbXVuaXF1ZXIgZW4gRnJhbsOnYWlz.bxErp9usfBcm5NMaDa8bj86m6f4d0YOIg8Fi-Yo5u7s','Ecrit','1','2022');

/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table notesByDomain
# ------------------------------------------------------------

DROP TABLE IF EXISTS `notesByDomain`;

CREATE TABLE `notesByDomain` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` varchar(255) DEFAULT NULL,
  `exam_id` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `domain_id` varchar(255) DEFAULT NULL,
  `activitieId` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `school_year` varchar(255) NOT NULL DEFAULT '2022',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

LOCK TABLES `notesByDomain` WRITE;
/*!40000 ALTER TABLE `notesByDomain` DISABLE KEYS */;

INSERT INTO `notesByDomain` (`id`, `student_id`, `exam_id`, `class_id`, `domain_id`, `activitieId`, `value`, `school_year`)
VALUES
	(1,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','5','2','14','2022'),
	(2,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','6','9','1','2022'),
	(3,'7','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','10','27','1','2022'),
	(4,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','5','3','10','2022'),
	(5,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','5','4','9','2022'),
	(6,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','5','5','6','2022'),
	(7,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','5','6','6','2022'),
	(8,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','5','7','2','2022'),
	(9,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','7','16','4','2022'),
	(10,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','6','8','2','2022'),
	(11,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','6','10','04','2022'),
	(12,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','6','11','2','2022'),
	(13,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','6','12','1','2022'),
	(14,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','7','13','2','2022'),
	(15,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','7','14','3','2022'),
	(16,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','7','15','1','2022'),
	(17,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','7','17','2','2022'),
	(18,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','8','18','1','2022'),
	(19,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','8','19','3','2022'),
	(20,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','8','20','1','2022'),
	(21,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','8','20','2','2022'),
	(22,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','8','21','1','2022'),
	(23,'3','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','9','22','2','2022'),
	(24,'7','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','14','47','1','2022'),
	(25,'8','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','10','23','1','2022'),
	(26,'7','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','10','23','3','2022'),
	(27,'7','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','10','24','1','2022'),
	(28,'8','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','10','24','1','2022'),
	(29,'7','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','10','25','1','2022'),
	(30,'8','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','10','25','2','2022'),
	(31,'8','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','10','26','3','2022'),
	(32,'8','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','10','27','1','2022');

/*!40000 ALTER TABLE `notesByDomain` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table notesBySubject
# ------------------------------------------------------------

DROP TABLE IF EXISTS `notesBySubject`;

CREATE TABLE `notesBySubject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` varchar(255) DEFAULT NULL,
  `exam_id` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `subject_id` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `school_year` varchar(255) NOT NULL DEFAULT '2022',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

LOCK TABLES `notesBySubject` WRITE;
/*!40000 ALTER TABLE `notesBySubject` DISABLE KEYS */;

INSERT INTO `notesBySubject` (`id`, `student_id`, `exam_id`, `class_id`, `subject_id`, `value`, `school_year`)
VALUES
	(1,'18','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','4','35','2022'),
	(2,'19','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','4','6','2022'),
	(3,'20','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','4','7','2022'),
	(4,'10','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','13','1','2022'),
	(5,'10','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','14','1','2022'),
	(6,'11','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','13','19','2022'),
	(7,'12','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','14','19','2022'),
	(8,'18','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','4','20','2022'),
	(9,'18','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','5','25','2022'),
	(10,'18','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','6','35','2022'),
	(11,'18','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','4','28','2022'),
	(12,'19','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','4','2','2022'),
	(13,'20','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','5','3','2022'),
	(14,'19','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','4','4','2022'),
	(15,'20','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','4','1','2022'),
	(16,'20','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','6','1','2022'),
	(17,'20','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','4','4','2022'),
	(18,'19','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','7','3','2022'),
	(19,'19','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','7','3','2022'),
	(20,'19','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','7','3','2022'),
	(21,'10','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','17','4','2022'),
	(22,'10','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','13','3','2022'),
	(23,'10','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','13','2','2022');

/*!40000 ALTER TABLE `notesBySubject` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;

INSERT INTO `sections` (`id`, `name`, `type`)
VALUES
	(11,'Maternelle en',1),
	(12,'Maternelle fr',2),
	(13,'Primaire en',4),
	(14,'Primaire fr',3),
	(15,'CM2',5);

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
	('eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0','seq1'),
	('eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o','seq2');

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

LOCK TABLES `stats` WRITE;
/*!40000 ALTER TABLE `stats` DISABLE KEYS */;

INSERT INTO `stats` (`id`, `student_id`, `class_id`, `exam_id`, `totalPoints`)
VALUES
	(1,'13','eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0',2),
	(2,'16','eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0',0),
	(3,'18','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0',35),
	(4,'10','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0',2),
	(5,'11','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0',19),
	(6,'12','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0',19),
	(7,'19','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0',9),
	(8,'20','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0',8),
	(9,'18','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',28),
	(10,'19','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',7),
	(11,'20','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',4),
	(12,'18','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',28),
	(13,'19','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',7),
	(14,'20','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',4),
	(15,'3','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(16,'5','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(17,'6','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(18,'3','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(19,'5','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(20,'6','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(21,'8','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(22,'9','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(23,'7','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(24,'7','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',0),
	(25,'18','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o',80),
	(26,'19','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o',5),
	(27,'20','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o',4),
	(28,'10','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o',7),
	(29,'10','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A',2);

/*!40000 ALTER TABLE `stats` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table students
# ------------------------------------------------------------

DROP TABLE IF EXISTS `students`;

CREATE TABLE `students` (
  `name` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `profession` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;

INSERT INTO `students` (`name`, `id`, `subname`, `email`, `phone_number`, `class_id`, `sex`, `birthday`, `birthday_place`, `school_year`, `status`, `school_id`, `fatherName`, `profession`)
VALUES
	('Madah ',3,'Allesie','chriskamgang@gmail.com','659339778','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','m','2000-05-12 00:00:00','Boufoussam','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','Madah Fidel','Commerçant'),
	('Tchinda ',5,'Nathan','chriskamgang@gmail.com','6589423685','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','m','1998-05-12 00:00:00','Mbouda','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','Tchinda','chef d\'entreprise'),
	('Nguepinse Kamgang',6,'Tite','chriskamgang@gmail.com','656575677','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','m','1998-05-31 00:00:00','Douala','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','Kamgang Honore','ONU'),
	('Student 1',7,'','','','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','m',NULL,'','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Student 2',8,'','','','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','f',NULL,'','2022','old','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Student 3',9,'','','','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','m',NULL,'','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Tchinda',10,'Nathan','chriskamgang@gmail.com','659339778','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','m','2000-05-01 00:00:00','Mbouda','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','Tchinda',''),
	('Donfack ',11,'Steve','chriskamgang@gmail.com','65656988','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','m','2000-07-12 00:00:00','Mbouda','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','kamgang',''),
	('Nguepinse Kamgang',12,'Tite','chriskamgang@gmail.com','656575677','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','m','2000-05-12 00:00:00','Bafoussam','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','Kamgang','ONU'),
	('Student 1',13,'','','','eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','m',NULL,'','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Student 2',16,'','','','eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','m',NULL,'','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Student 3',17,'','','','eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','m',NULL,'','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Student 1',18,'','','','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','m',NULL,'','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Student 2',19,'','','','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','m',NULL,'','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Student 3',20,'','','','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','m',NULL,'','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Megha Kamgang',21,'Ruth','','','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','f','2000-05-15 00:00:00','2000-05-15','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','kamgang',''),
	('Ngouda',22,'junior','','','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','m','2004-04-09 00:00:00','2004-04-09','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','',''),
	('Madah',23,'Allesie','chriskamgang@gmail.com','656575677','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','m','2000-01-01 00:00:00','2000-01-01','2022','new','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU','Allesie','ddddd');

/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sub_com
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sub_com`;

CREATE TABLE `sub_com` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `comId` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sub_com` WRITE;
/*!40000 ALTER TABLE `sub_com` DISABLE KEYS */;

INSERT INTO `sub_com` (`id`, `name`, `slug`, `section`, `comId`, `tags`)
VALUES
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgMUEgQ29tbXVuaXF1ZXIgZW4gRnJhbsOnYWlz.bxErp9usfBcm5NMaDa8bj86m6f4d0YOIg8Fi-Yo5u7s','COMPETENCES 1A Communiquer en Français','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDEgQ09NTVVOSVFVRVIgRU4gRlJBTkNBSVMsIEFOR0xBSVMgRVQgUFJBVElRVUVSIEFVIE1PSU5TIFVORSBMQU5HVUUgTkFUSU9OQUxF.kpUN4UzISGO6iEtqIJS9Nz5Be4lFvRM7EhG1W4wUEcM','[{\"name\":\"Orale\",\"over\":\"20\"},{\"name\":\"Ecrit\",\"over\":\"15\"},{\"name\":\"Savoir Etre\",\"over\":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgMUIgQ29tbXVuaWNhdGlvbiBpbiBFbmdsaXNo.ngnPNcTLMLIKzjmIjSYLrLseaqm-Wwp8dbOzKBXs9QY','COMPETENCES 1B Communication in English','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDEgQ09NTVVOSVFVRVIgRU4gRlJBTkNBSVMsIEFOR0xBSVMgRVQgUFJBVElRVUVSIEFVIE1PSU5TIFVORSBMQU5HVUUgTkFUSU9OQUxF.kpUN4UzISGO6iEtqIJS9Nz5Be4lFvRM7EhG1W4wUEcM','[{\"name\":\"Orale\",\"over\":\"20\"},{\"name\":\"Ecrit\",\"over\":\"15\"},{\"name\":\"Savoir Etre\",\"over\":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgMUMgUHJhdGlxdWVyIHVuZSBMYW5ndWUgTmF0aW9uYWxl.SSeFcBAPgpOANkY8EQ8m55ch3-KSFuKNEtctB-exD04','COMPETENCES 1C Pratiquer une Langue Nationale','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDEgQ09NTVVOSVFVRVIgRU4gRlJBTkNBSVMsIEFOR0xBSVMgRVQgUFJBVElRVUVSIEFVIE1PSU5TIFVORSBMQU5HVUUgTkFUSU9OQUxF.kpUN4UzISGO6iEtqIJS9Nz5Be4lFvRM7EhG1W4wUEcM','[{\"name\":\"Orale\",\"over\":\"10\"},{\"name\":\"Ecrit\",\"over\":\"5\"},{\"name\":\"Pratique\",\"over\":\"2\"},{\"name\":\"Savoir Etre\",\"over\":\"3\"}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgMkEgVXRpbGlzZXIgbGVzIE5vdGlvbnMgZGUgQmFzZSBlbiBNYXRow6ltYXRpcXVlIHM.Sdd-Lp2QIb7nSbYhP7d7KYUcW9SqoYrA6yXgOJ0aVV8','COMPETENCES 2A Utiliser les Notions de Base en Mathématique s','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDIgVVRJTElTRVIgTEVTIE5PVElPTlMgREUgQkFTRSBFTiBNQVRIRU1BVElRVUVTLCBTQ0lFTkNFUyBFVCBURUNITk9MT0dJRQ.MBAF6e7Bznq7EmDcWDn9Qq499vr1nRQhsgULQpFoF6U','[{\"name\":\"Orale\",\"over\":\"5\"},{\"name\":\"Ecrit\",\"over\":\"20\"},{\"name\":\"Savoir Etre\",\"over\":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgMkIgVXRpbGlzZXIgbGVzIE5vdGlvbnMgZGUgQmFzZSBlbiBTY2llbmNlIGV0IGVuIFRlY2hub2xvZ2ll.NuaxjnN55SkgGCG2py4SDun5qWZ1ioTXG7zzjbhqjrA','COMPETENCES 2B Utiliser les Notions de Base en Science et en Technologie','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDIgVVRJTElTRVIgTEVTIE5PVElPTlMgREUgQkFTRSBFTiBNQVRIRU1BVElRVUVTLCBTQ0lFTkNFUyBFVCBURUNITk9MT0dJRQ.MBAF6e7Bznq7EmDcWDn9Qq499vr1nRQhsgULQpFoF6U','[{\"name\":\"Orale\",\"over\":\"5\"},{\"name\":\"Ecrit\",\"over\":\"5\"},{\"name\":\"Pratique\",\"over\":15},{\"name\":\"Savoir Etre\",\"over\":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgNEEgRGVtb250cmVyIGwnQXV0b25vbWllLCBsJ0VzcHJpdCBkJ0luaXRpYXRpdmUsIGRlIENyw6lhdGl2aXTDqSBldCBkJ0VudHJlcHJlbmV1cmlhdA.ntW54kq0d6G0CENBQzUR2mCX9vGI_6xQaj00EmrD-AI','COMPETENCES 4A Demontrer l\'Autonomie, l\'Esprit d\'Initiative, de Créativité et d\'Entrepreneuriat','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDQgREVNT05UUkVSIEwnQVVUT05PTUlFLCBMJ0VTUFJJVCBEJ0lOSVRJQVRJVkUsIERFIENSRUFUSVZJVEUgRVQgRCdFTlRSRVBSRU5FVVJJQVQ.gqLcihEAZIqixkx3iPcegM7BVLk44CmpXGetsR3Ufew','[{\"name\":\"Orale\",\"over\":\"5\"},{\"name\":\"Ecrit\",\"over\":\"3\"},{\"name\":\"Pratique\",\"over\":\"10\"},{\"name\":\"Savoir Etre\",\"over\":\"2\"}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgNUEgVXRpbGlzZXIgbGVzIENvbmNlcHRzIGRlIEJhc2UgZXQgbGVzIE91dGlscyBUSUNz.e0ZZR5dbE30T1Ua1xK2GwT6wAMpFLc-tjrZXgYhWii0','COMPETENCES 5A Utiliser les Concepts de Base et les Outils TICs','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDUgVVRJTElTRVIgTEVTIENPTkNFUFRTIERFIEJBU0UgRVQgTEVTIE9VVElMUyBUSUNT.6wnh6Shxco7RkLJImnMd_yHo32qWewfMCFO0Q3idRSM','[{\"name\":\"Orale\",\"over\":\"3\"},{\"name\":\"Ecrit\",\"over\":\"4\"},{\"name\":\"Pratique\",\"over\":\"10\"},{\"name\":\"Savoir Etre\",\"over\":\"3\"}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgNkEgUHJhdGlxdWVyIGxlcyBBY3Rpdml0w6lzIFBoeXNpcXVlcyBldCBTcG9ydGl2ZSBz.YCrCmK96AOyexs0gChc5Ql5fbvhaJr8apvFjSUMs4lE','COMPETENCES 6A Pratiquer les Activités Physiques et Sportive s','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDYgUFJBVElRVUVSIExFUyBBQ1RJVklURVMgUEhZU0lRVUVTLCBTUE9SVElWRVMgRVQgQVJUSVNUSVFVRVM.JvZHtbJlxyr9TA3HdKEJuT98IWYrhbL9jcS3oZfvyaE','[{\"name\":\"Orale\",\"over\":\"2\"},{\"name\":\"Ecrit\",\"over\":\"2\"},{\"name\":\"Pratique\",\"over\":\"12\"},{\"name\":\"Savoir Etre\",\"over\":\"4\"}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgNkMgUHJhdGlxdWVyIGxlcyBBY3Rpdml0w6lzIEFydGlzdGlxdWVz.LqimXe7I0fr10yfC_VYFQ4EDg3PJX27PEgO_RsbIHiU','COMPETENCES 6C Pratiquer les Activités Artistiques','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDYgUFJBVElRVUVSIExFUyBBQ1RJVklURVMgUEhZU0lRVUVTLCBTUE9SVElWRVMgRVQgQVJUSVNUSVFVRVM.JvZHtbJlxyr9TA3HdKEJuT98IWYrhbL9jcS3oZfvyaE','[{\"name\":\"Orale\",\"over\":\"2\"},{\"name\":\"Ecrit\",\"over\":\"4\"},{\"name\":\"Pratique\",\"over\":\"12\"},{\"name\":\"Savoir Etre\",\"over\":\"2\"}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRVMgM0EgUHJhdGlxdWVyIGxlcyBWYWxldXJzIFNvY2lhbGVz.pUR4sF08yVpdGcYqipPOI2VvSHwgvtYSnCcYi8NiqhY','COMPETENCES 3A Pratiquer les Valeurs Sociales','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDMgUFJBVElRVUVSIExFUyBWQUxFVVJTIFNPQ0lBTEVTIEVUIENJVE9ZRU5ORVM.GSDRT3c90q8EcaY4580ThB_Oe1pA-1l3N5clZZmmg_c','[{\"name\":\"Orale\",\"over\":\"0\"},{\"name\":\"Ecrit\",\"over\":\"0\"},{\"name\":\"Pratique\",\"over\":\"0\"},{\"name\":\"Savoir Etre\",\"over\":\"0\"}]'),
	('eyJhbGciOiJIUzI1NiJ9.IENPTVBFVEVOQ0VTIDNCIFByYXRpcXVlciBsZXMgVmFsZXVycyBDaXRveWVubmVz.PolhhJaDBwTiLePCbM-OEe7ilfX8ytYytDS5ussQXT8',' COMPETENCES 3B Pratiquer les Valeurs Citoyennes','raf','14','eyJhbGciOiJIUzI1NiJ9.Q09NUEVURU5DRSA6IDMgUFJBVElRVUVSIExFUyBWQUxFVVJTIFNPQ0lBTEVTIEVUIENJVE9ZRU5ORVM.GSDRT3c90q8EcaY4580ThB_Oe1pA-1l3N5clZZmmg_c','[{\"name\":\"Orale\",\"over\":\"5\"},{\"name\":\"Ecrit\",\"over\":\"8\"},{\"name\":\"Pratique\",\"over\":\"5\"},{\"name\":\"Savoir Etre\",\"over\":\"2\"}]');

/*!40000 ALTER TABLE `sub_com` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table subjects
# ------------------------------------------------------------

DROP TABLE IF EXISTS `subjects`;

CREATE TABLE `subjects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `over` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;

INSERT INTO `subjects` (`id`, `name`, `section`, `over`)
VALUES
	(4,'DICTEE QUESTIONS','15',40),
	(5,' PRODUCTION D\'ECRITS','15',40),
	(6,'ANGLAIS','15',50),
	(7,' CALCUL RAPIDE','15',20),
	(8,'PROBLEMES','15',50),
	(9,'SCIENCES ET TECHNOLOGIES','15',50),
	(10,'SCIENCES HUMAINES & SOCIALES','15',40),
	(11,'TIC','15',30),
	(12,'EPS','15',20),
	(13,'Mathematics','13',20),
	(14,'English Language','13',20),
	(15,'Français','13',20),
	(16,' Science and Technology','13',20),
	(17,'Social Studies','13',20),
	(18,' Vocational Studies','13',20),
	(19,'Art','13',20),
	(20,' National Language and Culture','13',20),
	(21,'Physical Education','13',20),
	(22,'ICT','13',20);

/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
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
	('eyJhbGciOiJIUzI1NiJ9.VGVhY2hlciAx.JGrgB09Mw2Ap9rIqPMqlBZUEYMJkOVfaAIb5jGdN3rA','Mr Kodjo','Armand','eyJhbGciOiJIUzI1NiJ9.TnVyc2VyeSAx.sk5r0OEdWSX3tGFHzO015FQPzq_IK9KU35UKEDARgoA','SEM-NURSERY1','6966','m',NULL,'656576588','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.VGVhY2hlciAy.ndC0FVccy0aRVGwhvLn9zrQo7rrDbACRqNdNAHwL65Q','Mr NFONE','Abdoulaye','eyJhbGciOiJIUzI1NiJ9.UGV0aXRlIFNlY3Rpb24.a-83PyrruPnd4a7tCS0D7r7ySlogqPZyCCTc_0FjXiI','SEM-PETITESECTION','1229','m',NULL,'6565656565','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.VGVhY2hlcjM.twbEJkwDQ_yttHI_9LEs6dka2vttFniL-pdU9mobHu8','Teacher3','','eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w','SEM-CLASS1','1396','m',NULL,'','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.VGVhY2hlciA0.uMdiVbnJg8i_txJ8rGfMsFzRPmBgvn361ssqElYr7v4','Teacher 4','','eyJhbGciOiJIUzI1NiJ9.U0lMIEI.WnDylHBcIkn1ls8NhskxZFkSc8HaE9vWeRkCDikET5o','SEM-SILB','2667','m',NULL,'','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU'),
	('eyJhbGciOiJIUzI1NiJ9.VGVhY2hlciA1.CKdxg5D6I351K68rVETWjRHNEqeFcp_Fy_lsve_orUo','Teacher 5','','eyJhbGciOiJIUzI1NiJ9.Q00y.lEbIZ46P-tfV9TfAfYNNPuoWA-FbgHXfVeydpo0FGss','SEM-CM2','10335','m',NULL,'','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU');

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
	('eyJhbGciOiJIUzI1NiJ9.dHJpbTE.0xVVTspZIJcbVp1BMkTNu1xbfj_-aFFnEyf3bFvDs9A','trim1','[\"eyJhbGciOiJIUzI1NiJ9.c2VxMQ.n3D7SmuKn_644JJj4ZcElTz30mRMbU25Lj_OLudMrx0\",\"eyJhbGciOiJIUzI1NiJ9.c2VxMg.8GWTiUNaXbRbBOiazzW5cfZlR6DskbdlIJO41r4Dg-o\"]');

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
	('eyJhbGciOiJIUzI1NiJ9.ZGFuaWxvZXlKaGJHY2lPaUpJVXpJMU5pSjkuVEdFZ2MyVnRaVzVqWlEuZlJ3REZKM0wyUFZta1VxTjRqZDJmVk02a2JUTV80M0JiMUxTRk1MT09HVQ.8WvIeDTyRvmKfsiYRNWtLrN5Ux8mvGk_Vx_en-H5Rxg','danilo','danidjakam@gmail.com','$2b$10$Md/15AWmgwIbdtsBtjy1H.BpNX06XxZDWvvK2IXvYXtsSLYIQj1t2','eyJhbGciOiJIUzI1NiJ9.TGEgc2VtZW5jZQ.fRwDFJ3L2PVmkUqN4jd2fVM6kbTM_43Bb1LSFMLOOGU');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
