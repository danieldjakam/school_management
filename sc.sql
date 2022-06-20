-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.29 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour school_management
CREATE DATABASE IF NOT EXISTS `school_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `school_management`;

-- Listage de la structure de la table school_management. class
CREATE TABLE IF NOT EXISTS `class` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `teacherId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.class : ~4 rows (environ)
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` (`id`, `name`, `section`, `teacherId`) VALUES
	('eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'Sil B', 'fr', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q'),
	('eyJhbGciOiJIUzI1NiJ9.Q0UxIEI.UTpihmB-5GQdmBP-NkBMZlZNx-EEAvb5hWe7bn9vsLk', 'CE1 B', 'fr', 'eyJhbGciOiJIUzI1NiJ9.aWlpaQ.EMzTS6tyT-5pIbBstcfhh7f4k7zSpH8FxIBvKWt2eSw'),
	('eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w', 'Class 1', 'en', 'eyJhbGciOiJIUzI1NiJ9.dGVzdA.AJ3i5bRzSEwimgS75qYbLpeTqrtwbnHor81wpMuYMe4'),
	('eyJhbGciOiJIUzI1NiJ9.Q0UyIEE.LxKJf3O-NG5tJJRC9byuUexbIubmCB7qvUGsf8ghLdY', 'CE2 A', 'fr', 'eyJhbGciOiJIUzI1NiJ9.ZmZk.wFzjUJi0rzJNMid1TmVccSSAf9H2lTIILT8dEMOSjTc'),
	('eyJhbGciOiJIUzI1NiJ9.bGxsbGw.5-W5rvE0mESNVGDruW3aY_zt_6zSiZXFT7Yupx8WiqI', 'lllll', 'fr', NULL);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;

-- Listage de la structure de la table school_management. com
CREATE TABLE IF NOT EXISTS `com` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.com : ~2 rows (environ)
/*!40000 ALTER TABLE `com` DISABLE KEYS */;
INSERT INTO `com` (`id`, `name`, `section`) VALUES
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAx.O6mhOhIp-XqkRK0yc74aS49FLbqcX0ANPs6MPSAxcQo', 'Competence 1', 'fr'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAy.C9MYUKISqcYCkYluHhHN7req0xTZN5isGM9nXIA6WhE', 'Competence 2', 'fr');
/*!40000 ALTER TABLE `com` ENABLE KEYS */;

-- Listage de la structure de la table school_management. matiere
CREATE TABLE IF NOT EXISTS `matiere` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `comId` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.matiere : ~5 rows (environ)
/*!40000 ALTER TABLE `matiere` DISABLE KEYS */;
INSERT INTO `matiere` (`id`, `name`, `slug`, `section`, `comId`, `tags`) VALUES
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Competence 1A: Francais', 'Apprendre le francais', 'fr', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAx.O6mhOhIp-XqkRK0yc74aS49FLbqcX0ANPs6MPSAxcQo', '[{"name":"Orale","over":5},{"name":"Ecrit","over":5},{"name":"Savoir Etre","over":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Competence 1B: Anglais', 'Apprendre l\'anglais', 'fr', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAx.O6mhOhIp-XqkRK0yc74aS49FLbqcX0ANPs6MPSAxcQo', '[{"name":"Orale","over":5},{"name":"Ecrit","over":5},{"name":"Savoir Etre","over":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Competence 1C: Langue Nationale', 'Apprendre la lange nationale', 'fr', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAx.O6mhOhIp-XqkRK0yc74aS49FLbqcX0ANPs6MPSAxcQo', '[{"name":"Orale","over":5},{"name":"Ecrit","over":5},{"name":"Savoir Etre","over":5}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Competence 2A: Maths', 'Mathematiques', 'fr', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAy.C9MYUKISqcYCkYluHhHN7req0xTZN5isGM9nXIA6WhE', '[{"name":"Orale","over":5},{"name":"Ecrit","over":"5"},{"name":"Savoir Etre","over":"5"},{"name":"Pratique","over":15}]'),
	('eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Competence 2C: Science', 'Science', 'fr', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAy.C9MYUKISqcYCkYluHhHN7req0xTZN5isGM9nXIA6WhE', '[{"name":"Orale","over":"5"},{"name":"Ecrit","over":5},{"name":"Savoir Etre","over":5},{"name":"Pratique","over":15}]');
/*!40000 ALTER TABLE `matiere` ENABLE KEYS */;

-- Listage de la structure de la table school_management. notes
CREATE TABLE IF NOT EXISTS `notes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` varchar(255) DEFAULT NULL,
  `exam_id` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `matiere_id` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.notes : ~102 rows (environ)
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` (`id`, `student_id`, `exam_id`, `class_id`, `matiere_id`, `tag_name`, `value`) VALUES
	(1, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Orale', '3'),
	(2, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Ecrit', '5'),
	(3, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Savoir Etre', '5'),
	(4, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Orale', '3'),
	(5, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Ecrit', '3'),
	(6, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Savoir Etre', '5'),
	(7, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Orale', '5'),
	(8, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Ecrit', '3'),
	(9, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Savoir Etre', '5'),
	(10, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Orale', '5'),
	(11, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Ecrit', '5'),
	(12, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Savoir Etre', '5'),
	(13, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Pratique', '13'),
	(14, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Orale', '3'),
	(15, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Ecrit', '3'),
	(16, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Savoir Etre', '3'),
	(17, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Pratique', '13'),
	(18, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Orale', '3'),
	(19, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Ecrit', '3'),
	(20, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Savoir Etre', '5'),
	(21, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Orale', '5'),
	(22, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Ecrit', '5'),
	(23, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Savoir Etre', '5'),
	(24, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Orale', '5'),
	(25, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Ecrit', '5'),
	(26, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Savoir Etre', '5'),
	(27, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Orale', '2'),
	(28, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Ecrit', '2'),
	(29, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Savoir Etre', '1'),
	(30, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Pratique', '9'),
	(31, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Orale', '3'),
	(32, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Ecrit', '2'),
	(33, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Savoir Etre', '3'),
	(34, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Pratique', '13'),
	(35, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Orale', '2'),
	(36, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Ecrit', '1'),
	(37, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Savoir Etre', '1'),
	(38, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Orale', '3'),
	(39, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Ecrit', '2'),
	(40, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Savoir Etre', '2'),
	(41, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Orale', '2'),
	(42, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Ecrit', '2'),
	(43, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Savoir Etre', '2'),
	(44, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Orale', '2'),
	(45, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Ecrit', '2'),
	(46, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Savoir Etre', '2'),
	(47, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Pratique', '15'),
	(48, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Orale', '2'),
	(49, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Ecrit', '3'),
	(50, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Savoir Etre', '3'),
	(51, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Pratique', '3'),
	(52, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Orale', '3'),
	(53, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Ecrit', '3'),
	(54, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Savoir Etre', '3'),
	(55, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Orale', '3'),
	(56, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Ecrit', '3'),
	(57, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Savoir Etre', '3'),
	(58, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Orale', '3'),
	(59, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Ecrit', '3'),
	(60, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Savoir Etre', '3'),
	(61, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Orale', '3'),
	(62, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Ecrit', '3'),
	(63, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Savoir Etre', '3'),
	(64, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Pratique', '6'),
	(65, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Orale', '3'),
	(66, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Ecrit', '3'),
	(67, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Savoir Etre', '3'),
	(68, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Pratique', '15'),
	(69, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Orale', '3'),
	(70, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Ecrit', '3'),
	(71, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Savoir Etre', '3'),
	(72, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Orale', '3'),
	(73, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Ecrit', '1'),
	(74, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Savoir Etre', '3'),
	(75, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Orale', '3'),
	(76, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Ecrit', '3'),
	(77, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Savoir Etre', '3'),
	(78, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Orale', '2'),
	(79, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Ecrit', '5'),
	(80, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Savoir Etre', '5'),
	(81, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Pratique', '15'),
	(82, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Orale', '5'),
	(83, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Ecrit', '5'),
	(84, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Savoir Etre', '5'),
	(85, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Pratique', '15'),
	(86, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Orale', '5'),
	(87, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Ecrit', '5'),
	(88, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQTogRnJhbmNhaXM.u-0AlCqOyzn3OQDTMrGKYNGxWOTGaK7T3rwRFab_FYM', 'Savoir Etre', '5'),
	(89, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Orale', '5'),
	(90, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Ecrit', '5'),
	(91, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQjogQW5nbGFpcw.XTTtBzujnRqHnUCzFAW0G63-QthrFMUdGW_WPnCxraA', 'Savoir Etre', '5'),
	(92, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Orale', '5'),
	(93, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Ecrit', '5'),
	(94, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAxQzogTGFuZ3VlIE5hdGlvbmFsZQ.kygvJZYf1i8dmB98UdUnwr35Eg3eKeMODmaKZIT-j3U', 'Savoir Etre', '5'),
	(95, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Orale', '5'),
	(96, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Ecrit', '5'),
	(97, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Savoir Etre', '5'),
	(98, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQTogTWF0aHM.kBFih7OVKo7vSNZodIZOR40r4DpV_cSfTBqS-SdB6H0', 'Pratique', '2'),
	(99, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Orale', '2'),
	(100, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Ecrit', '2'),
	(101, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Savoir Etre', '2'),
	(102, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.Q29tcGV0ZW5jZSAyQzogU2NpZW5jZQ.vA9eVQf4Ks1HiVuNLJ_MTynLu2shl07rVpmG6bpVxS4', 'Pratique', '2');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;

-- Listage de la structure de la table school_management. seq
CREATE TABLE IF NOT EXISTS `seq` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.seq : ~2 rows (environ)
/*!40000 ALTER TABLE `seq` DISABLE KEYS */;
INSERT INTO `seq` (`id`, `name`) VALUES
	('eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 'Sequence 1'),
	('eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 'Sequence 2');
/*!40000 ALTER TABLE `seq` ENABLE KEYS */;

-- Listage de la structure de la table school_management. stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` varchar(255) NOT NULL,
  `class_id` varchar(255) NOT NULL,
  `exam_id` varchar(255) NOT NULL,
  `totalPoints` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.stats : ~8 rows (environ)
/*!40000 ALTER TABLE `stats` DISABLE KEYS */;
INSERT INTO `stats` (`id`, `student_id`, `class_id`, `exam_id`, `totalPoints`) VALUES
	(1, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 87),
	(2, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 49),
	(3, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk', 66),
	(4, 'eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.VHJpbWVzdHJlIDE.6OgKfkiSb6MkH1Wch5pJLHfSCkOAiV0C4XMXsSbcZtw', 83),
	(5, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.VHJpbWVzdHJlIDE.6OgKfkiSb6MkH1Wch5pJLHfSCkOAiV0C4XMXsSbcZtw', 70),
	(6, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.VHJpbWVzdHJlIDE.6OgKfkiSb6MkH1Wch5pJLHfSCkOAiV0C4XMXsSbcZtw', 70),
	(7, 'eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 82),
	(8, 'eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE', 70);
/*!40000 ALTER TABLE `stats` ENABLE KEYS */;

-- Listage de la structure de la table school_management. students
CREATE TABLE IF NOT EXISTS `students` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `subname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.students : ~3 rows (environ)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`id`, `name`, `subname`, `email`, `phone_number`, `class_id`, `sex`, `birthday`) VALUES
	('eyJhbGciOiJIUzI1NiJ9.VHVjaGU.zo4kH5TAUyoxJeKoHfTDVWqjLe5qXjergf-hNMmCfLk', 'Tuche', 'Jean', 'chriskamgang@gmail.com', '99999002020', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'm', '2022-06-06'),
	('eyJhbGciOiJIUzI1NiJ9.VGVzdG9ucw.57sNxYr1AAfNdG5sRTohJxPts42Bro5AajEsge7ptZI', 'Testons', 'Con', 'hhjkkl@jjj.co', '88888888888', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'f', '2022-05-03'),
	('eyJhbGciOiJIUzI1NiJ9.Tmd1ZXBpbnNlIEthbWdhbmc.hKhk7o-VlG-TJa0aldDEClhSB7vWxO3abd383vEB_VY', 'Nguepinse Kamgang', 'Tite', 'danidjakam@gmail.com', '655773309', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'm', '2022-04-20');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Listage de la structure de la table school_management. teachers
CREATE TABLE IF NOT EXISTS `teachers` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `subname` varchar(255) DEFAULT NULL,
  `class_id` varchar(255) DEFAULT NULL,
  `matricule` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.teachers : ~3 rows (environ)
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` (`id`, `name`, `subname`, `class_id`, `matricule`) VALUES
	('eyJhbGciOiJIUzI1NiJ9.VGVhY2hlcg.iaLuh-SltkyY36sQLf_2FwOBgYbg1H-oUw2FD7sAKYg', 'Teacher', 'Bigus', 'eyJhbGciOiJIUzI1NiJ9.U2lsIEI.cJlfh-J53quTXCbAFWXImGXV9XWJxASbWf5N2ktBo6Q', 'SEM-779385'),
	('eyJhbGciOiJIUzI1NiJ9.YmNjYg.MiCy9SMYzA6Rq1qHs4JjAjVHMS0p6ngOjn_IWc_q9Ck', 'bccb', 'cbcbcb', 'eyJhbGciOiJIUzI1NiJ9.Q2xhc3MgMQ.yC4Z-RCT2PUlVDkfXBY070I8TwWaVy2bWHjyOH7Ti7w', 'SEM-820792'),
	('eyJhbGciOiJIUzI1NiJ9.bGR3ZWQ.8-vlz1RV44_A9aLGF7wJuZ5_ApsNOzk-od2SwNEkb9M', 'CE1 B', 'sfd', 'eyJhbGciOiJIUzI1NiJ9.Q0UxIEI.UTpihmB-5GQdmBP-NkBMZlZNx-EEAvb5hWe7bn9vsLk', 'SEM-CE1 B');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;

-- Listage de la structure de la table school_management. trims
CREATE TABLE IF NOT EXISTS `trims` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `seqIds` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.trims : ~0 rows (environ)
/*!40000 ALTER TABLE `trims` DISABLE KEYS */;
INSERT INTO `trims` (`id`, `name`, `seqIds`) VALUES
	('eyJhbGciOiJIUzI1NiJ9.VHJpbWVzdHJlIDE.6OgKfkiSb6MkH1Wch5pJLHfSCkOAiV0C4XMXsSbcZtw', 'Trimestre 1', '["eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk","eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMg.qqDJbgUjKQI2TFWjfpMADrL_slcuKDMyChhGMwDcRxE"]'),
	('eyJhbGciOiJIUzI1NiJ9.ZnNmc2Rmc2Y.--Z-QCcmjuBqkUJlus3mPRoIS9P7_Ywg0XlvG3ohTgg', 'fsfsdfsf', '["eyJhbGciOiJIUzI1NiJ9.U2VxdWVuY2UgMQ.SEDP_7q6LVw1gH0rbVc4iECXht3acnxDwpL7GVmPwgk"]');
/*!40000 ALTER TABLE `trims` ENABLE KEYS */;

-- Listage de la structure de la table school_management. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table school_management.users : ~1 rows (environ)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
	('eyJhbGciOiJIUzI1NiJ9.RGFuaWVs.C0nMogGqNpgUB0kEWLT9R81KQOgXGXt2Cz2saXnTPus', 'Daniel', 'danidjakam@gmail.com', 'danilo');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
