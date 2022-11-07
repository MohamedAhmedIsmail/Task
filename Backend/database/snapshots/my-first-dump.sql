
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
DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admins` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `isSuperAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'super_admin@admin.com','superAdmin','01286515090','$2a$12$o69GkM4WL5fF6rA8O3gL7.6xIrDAcwbEB3WQtMket5fzzaRHzDybK',1,1,'2021-09-08 14:05:15','2021-09-09 05:49:22');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `app_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_settings` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(250) DEFAULT NULL,
  `registration_num` varchar(250) DEFAULT NULL,
  `account_num` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `tax` varchar(250) DEFAULT NULL,
  `national_address` varchar(250) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `app_settings` WRITE;
/*!40000 ALTER TABLE `app_settings` DISABLE KEYS */;
INSERT INTO `app_settings` VALUES (1,'dasdsa','32132131','323213123','dasdsa@g.com','10','',NULL,'2022-03-16 15:22:49');
/*!40000 ALTER TABLE `app_settings` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `contracts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contracts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tenant_id` bigint(20) NOT NULL,
  `rental_unit_id` bigint(20) NOT NULL,
  `tenant_code` varchar(250) DEFAULT NULL,
  `date_type` varchar(250) DEFAULT NULL,
  `start_electricity_meter` varchar(250) DEFAULT NULL,
  `payment_type` varchar(250) DEFAULT NULL,
  `rent_start_date_hijri` varchar(250) DEFAULT NULL,
  `rent_start_date_gregory` varchar(250) DEFAULT NULL,
  `rent_end_date_hijri` varchar(250) DEFAULT NULL,
  `rent_end_date_gregory` varchar(250) DEFAULT NULL,
  `months_duration` varchar(250) DEFAULT NULL,
  `e_contract_number` varchar(250) DEFAULT NULL,
  `e_contract_start_date` varchar(250) DEFAULT NULL,
  `e_contract_end_date` varchar(250) DEFAULT NULL,
  `notes_about_tenant` text,
  `communications_notes` text,
  `notes_before_receipt` text,
  `notes_for_receipt` text,
  `extra_notes_1` text,
  `extra_notes_2` text,
  `contract_amount` varchar(250) DEFAULT NULL,
  `taxable` tinyint(1) DEFAULT '0',
  `isActive` tinyint(4) NOT NULL,
  `isStopped` tinyint(1) NOT NULL DEFAULT '0',
  `stop_reason` text,
  `stop_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `contracts` WRITE;
/*!40000 ALTER TABLE `contracts` DISABLE KEYS */;
INSERT INTO `contracts` VALUES (15,6,9,'9-9','gregory','24342323','1','1443/7/28','2022/03/01','1443/12/30','2022/12/31','10','3232323','2022-04-23','2022-04-23','','','','','','','20166.33',1,1,0,NULL,NULL,'2022-04-23 17:47:29','2022-04-23 17:48:31');
/*!40000 ALTER TABLE `contracts` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `landlord_vouchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `landlord_vouchers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `voucher_type` varchar(250) NOT NULL,
  `voucher_number` varchar(250) NOT NULL,
  `voucher_date_gregory` varchar(250) NOT NULL,
  `voucher_date_hijri` varchar(250) NOT NULL,
  `landlord_id` bigint(20) NOT NULL,
  `amount` varchar(250) NOT NULL,
  `payment_type` varchar(250) NOT NULL,
  `amount_note_statment` text,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `landlord_vouchers` WRITE;
/*!40000 ALTER TABLE `landlord_vouchers` DISABLE KEYS */;
/*!40000 ALTER TABLE `landlord_vouchers` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `landlords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `landlords` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `landlord_name` varchar(255) NOT NULL,
  `agent_name` varchar(255) DEFAULT NULL,
  `nationality_id` varchar(255) DEFAULT NULL,
  `id_number` varchar(255) DEFAULT NULL,
  `id_source` varchar(255) DEFAULT NULL,
  `id_date` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `notes` mediumtext,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `landlords` WRITE;
/*!40000 ALTER TABLE `landlords` DISABLE KEYS */;
INSERT INTO `landlords` VALUES (21,'محمد مدحت كمال محمد','','5','','','','','','','',1,'2022-04-16 15:46:42','2022-04-16 15:46:42'),(22,'عبد الحميد','','5','','','','','','','',1,'2022-04-16 17:47:08','2022-04-16 17:47:08');
/*!40000 ALTER TABLE `landlords` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `mediable_id` bigint(20) NOT NULL,
  `mediable_type` varchar(250) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `type` varchar(250) DEFAULT NULL,
  `path` text,
  `size` varchar(250) DEFAULT NULL,
  `attribute` varchar(250) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=128 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (127,1,'App\\Models\\AppSetting','logo.png','png','tenants/app_setting/logo/logo.png','8.47 KB','logo','2022-04-16 19:59:59','2022-04-16 19:59:59'),(125,1,'App\\Models\\AppSetting','1-1650146327-Screenshot 2022-04-06 003022.png','png','tenants/app_setting/contract_header/1-1650146327-Screenshot 2022-04-06 003022.png','109.67 KB','contract_header','2022-04-16 19:58:47','2022-04-16 19:58:47');
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(35,'2019_12_14_000001_create_personal_access_tokens_table',17),(36,'2021_08_10_211500_create_admins_table',17),(37,'2021_08_10_211713_create_permission_tables',17),(41,'2021_09_11_223628_create_notifications_table',20);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `model_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `model_has_permissions` WRITE;
/*!40000 ALTER TABLE `model_has_permissions` DISABLE KEYS */;
INSERT INTO `model_has_permissions` VALUES (2,'App\\Models\\Admins',1),(3,'App\\Models\\Admins',1),(4,'App\\Models\\Admins',1),(5,'App\\Models\\Admins',1),(6,'App\\Models\\Admins',1),(7,'App\\Models\\Admins',1),(15,'App\\Models\\Admins',1),(16,'App\\Models\\Admins',1),(17,'App\\Models\\Admins',1),(18,'App\\Models\\Admins',1),(19,'App\\Models\\Admins',1),(20,'App\\Models\\Admins',1),(21,'App\\Models\\Admins',1),(22,'App\\Models\\Admins',1),(23,'App\\Models\\Admins',1),(24,'App\\Models\\Admins',1),(25,'App\\Models\\Admins',1),(26,'App\\Models\\Admins',1),(27,'App\\Models\\Admins',1),(28,'App\\Models\\Admins',1),(29,'App\\Models\\Admins',1),(30,'App\\Models\\Admins',1),(31,'App\\Models\\Admins',1),(32,'App\\Models\\Admins',1),(33,'App\\Models\\Admins',1),(34,'App\\Models\\Admins',1),(35,'App\\Models\\Admins',1),(36,'App\\Models\\Admins',1),(37,'App\\Models\\Admins',1),(38,'App\\Models\\Admins',1),(39,'App\\Models\\Admins',1),(40,'App\\Models\\Admins',1),(41,'App\\Models\\Admins',1),(42,'App\\Models\\Admins',1),(43,'App\\Models\\Admins',1),(44,'App\\Models\\Admins',1),(45,'App\\Models\\Admins',1),(46,'App\\Models\\Admins',1),(47,'App\\Models\\Admins',1),(48,'App\\Models\\Admins',1),(49,'App\\Models\\Admins',1),(50,'App\\Models\\Admins',1),(51,'App\\Models\\Admins',1),(52,'App\\Models\\Admins',1);
/*!40000 ALTER TABLE `model_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `model_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `model_has_roles` WRITE;
/*!40000 ALTER TABLE `model_has_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_roles` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `nationalities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nationalities` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `nationalities` WRITE;
/*!40000 ALTER TABLE `nationalities` DISABLE KEYS */;
INSERT INTO `nationalities` VALUES (5,'مصري','2022-02-12 09:45:20','2022-02-12 09:45:20'),(4,'سعودي','2022-02-12 09:45:15','2022-02-12 09:45:15'),(7,'هندي','2022-02-15 16:17:18','2022-02-15 16:17:18');
/*!40000 ALTER TABLE `nationalities` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) unsigned NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES ('0d442e21-293f-4e86-8254-c77205795dd8','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 04:49:22','2021-09-16 04:48:38','2021-09-16 04:49:22'),('149b9308-cd53-4007-8d5c-4d7edf0db7ba','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 12:43:21','2021-09-16 12:41:02','2021-09-16 12:43:21'),('1ea2c557-8d66-46d4-9f74-5c8e7e7f5bae','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 13:06:17','2021-09-16 13:06:06','2021-09-16 13:06:17'),('22e4477c-af4a-49b0-8d7c-42d97784d1e1','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 12:41:57','2021-09-16 12:41:57'),('27062492-ba5b-4f28-8bbc-96c60efe0fc9','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 05:46:24','2021-09-16 05:46:10','2021-09-16 05:46:24'),('3072caf3-45de-4272-be13-ca3e8f599e8e','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 04:49:16','2021-09-16 04:49:02','2021-09-16 04:49:16'),('3b214672-6eab-437a-96af-db2d33cd9782','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 12:41:51','2021-09-16 12:41:51'),('44c12354-5121-4e7a-ad48-391613962f05','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 07:29:15','2021-09-16 07:24:40','2021-09-16 07:29:15'),('48c090e8-b96f-4864-9153-2ed9d4577e8e','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 13:03:49','2021-09-16 12:52:39','2021-09-16 13:03:49'),('4fa085ce-4650-4958-b125-1e0d7f9285e7','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 13:07:57','2021-09-16 13:07:52','2021-09-16 13:07:57'),('56751b64-6f3d-455f-8141-87a4b1440ff5','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 05:46:41','2021-09-16 05:46:41'),('5b90daa4-6776-4ac2-806a-0f4401418f84','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 12:43:15','2021-09-16 12:41:57','2021-09-16 12:43:15'),('5d102431-280c-42a6-b7f4-46bad8ce0def','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 07:24:22','2021-09-16 07:24:22'),('6083c315-926b-4818-808c-38ab399d9838','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 04:38:20','2021-09-16 04:38:20'),('610af78a-abf3-4e3d-927e-9777ae89b41c','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 12:43:21','2021-09-16 12:41:24','2021-09-16 12:43:21'),('639d0cec-37a5-40e9-93a5-4f4ada0c8368','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 05:46:32','2021-09-16 05:46:10','2021-09-16 05:46:32'),('67e5fa38-8736-4031-b3cc-542419be40e4','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 12:41:24','2021-09-16 12:41:24'),('688ef67a-1a7d-4428-95ac-e4a515ffd7b8','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 04:42:12','2021-09-16 04:42:12'),('730f56be-3def-424e-983f-9b4c6cdf7bd3','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 04:49:02','2021-09-16 04:49:02'),('7781d2f0-a7bb-44f7-8df4-c2b0990a5b17','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 05:46:10','2021-09-16 05:46:10'),('77a2e774-0aed-4137-a957-89044a9dc4c2','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 04:49:22','2021-09-16 04:48:56','2021-09-16 04:49:22'),('7a5c8fce-df66-44c2-8992-7515b3bab832','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 05:47:01','2021-09-16 05:46:41','2021-09-16 05:47:01'),('7c193593-dee4-456c-b7af-388ccc29183b','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 04:51:10','2021-09-16 04:50:06','2021-09-16 04:51:10'),('827ffeba-b01a-4214-b555-172ce130633a','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 04:42:41','2021-09-16 04:42:12','2021-09-16 04:42:41'),('87ab312d-19bb-48bf-9881-391f1805143a','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 07:24:22','2021-09-16 07:24:22'),('8dab00a3-64b0-4a87-b265-2895c067dd71','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 12:52:39','2021-09-16 12:52:39'),('96b0633e-98f5-4a36-91a3-36dd3c9148b6','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 04:42:24','2021-09-16 04:38:20','2021-09-16 04:42:24'),('98612c0c-cbf6-44c2-ae3f-7545316a9451','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 04:56:56','2021-09-16 04:56:56'),('a035eeb5-31c9-4643-9f63-9104759c2480','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 13:06:06','2021-09-16 13:06:06'),('a9ad2a53-a0a0-427e-a16c-d142f7a3193d','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 05:46:10','2021-09-16 05:46:10'),('b1b7cf73-c7b4-491e-ae46-29946221732a','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 13:07:52','2021-09-16 13:07:52'),('b45255ef-0a2e-4e7f-8206-27827e06af88','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 07:24:40','2021-09-16 07:24:40'),('b493c71d-5bb6-4989-b61b-b10fd14593b7','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 05:36:50','2021-09-16 04:56:55','2021-09-16 05:36:50'),('be95c715-26f0-4e32-a84a-f1cf572a9a9b','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 07:29:33','2021-09-16 07:24:22','2021-09-16 07:29:33'),('c22b1a4b-e44a-4975-9f7a-1eceb3adeb82','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 04:48:38','2021-09-16 04:48:38'),('c26d08a3-9f65-48b8-a355-d4ca96a2c1d8','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 07:29:51','2021-09-16 07:29:51'),('c2a6fff1-36c5-45cf-bed5-a077276fe220','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 04:48:56','2021-09-16 04:48:56'),('c8de962d-b1f8-46a5-8722-fd7af7188637','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 12:41:02','2021-09-16 12:41:02'),('d75283ee-bf60-4aa3-8522-c71970d0228c','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 12:43:17','2021-09-16 12:41:51','2021-09-16 12:43:17'),('dbd68a9f-aae9-4047-88fa-500548bc305a','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 07:29:34','2021-09-16 07:24:22','2021-09-16 07:29:34'),('dc299660-17cc-4524-b336-e4685b70d94e','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 12:44:43','2021-09-16 12:44:43'),('e231f6d0-a091-4a83-a832-92e308b73a87','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 04:50:06','2021-09-16 04:50:06'),('e8d92db1-e6d3-4963-a6e5-f2a354eb9bce','App\\Notifications\\UpdateNotification','App\\Models\\Admins',3,'{\"id\":3,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":3,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}',NULL,'2021-09-16 04:43:01','2021-09-16 04:43:01'),('f55bfdea-1fa1-47e8-ac77-5281148f2bbe','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 12:45:10','2021-09-16 12:44:43','2021-09-16 12:45:10'),('f6391322-7f22-4247-a4e6-0226cebd8887','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 04:48:06','2021-09-16 04:43:01','2021-09-16 04:48:06'),('f959734e-7220-43db-a6f1-aba334faa56e','App\\Notifications\\UpdateNotification','App\\Models\\Admins',1,'{\"id\":1,\"notification_message\":\"Hend Adam has been added to the pending list\",\"admin_id\":1,\"section_name\":\"Agent Transfer\",\"date\":\"1 week ago\"}','2021-09-16 07:29:55','2021-09-16 07:29:51','2021-09-16 07:29:55');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (2,'add_admin','web','2021-08-23 04:28:02','2021-08-23 04:28:02'),(3,'view_admin','web','2021-08-23 04:28:02','2021-08-23 04:28:02'),(4,'edit_admin','web','2021-08-23 04:28:02','2021-08-23 04:28:02'),(5,'delete_admin','web','2021-08-23 04:28:02','2021-08-23 04:28:02'),(6,'active_admin','web','2021-08-23 04:28:02','2021-08-23 04:28:02'),(7,'admin_permissions','web','2021-08-23 04:28:02','2021-08-23 04:28:02'),(15,'access_admin','web','2022-02-09 12:09:45','2022-02-09 12:09:45'),(16,'access_landlord','web','2022-02-10 06:23:39','2022-02-10 06:23:39'),(17,'view_landlord','web','2022-02-10 06:23:41','2022-02-10 06:23:41'),(18,'edit_landlord','web','2022-02-10 06:23:41','2022-02-10 06:23:41'),(19,'delete_landlord','web','2022-02-10 06:23:41','2022-02-10 06:23:41'),(20,'add_landlord','web','2022-02-10 07:19:12','2022-02-10 07:19:12'),(21,'access_nationality','web','2022-02-10 17:44:16','2022-02-10 17:44:16'),(22,'add_nationality','web','2022-02-10 17:44:16','2022-02-10 17:44:16'),(23,'view_nationality','web','2022-02-10 17:44:16','2022-02-10 17:44:16'),(24,'edit_nationality','web','2022-02-10 17:44:17','2022-02-10 17:44:17'),(25,'delete_nationality','web','2022-02-10 17:44:17','2022-02-10 17:44:17'),(26,'access_property','web','2022-02-11 14:26:28','2022-02-11 14:26:28'),(27,'add_property','web','2022-02-11 14:26:28','2022-02-11 14:26:28'),(28,'view_property','web','2022-02-11 14:26:28','2022-02-11 14:26:28'),(29,'edit_property','web','2022-02-11 14:26:28','2022-02-11 14:26:28'),(30,'delete_property','web','2022-02-11 14:26:29','2022-02-11 14:26:29'),(31,'access_rental_unit','web','2022-02-11 14:26:29','2022-02-11 14:26:29'),(32,'add_rental_unit','web','2022-02-11 14:26:29','2022-02-11 14:26:29'),(33,'view_rental_unit','web','2022-02-11 14:26:29','2022-02-11 14:26:29'),(34,'edit_rental_unit','web','2022-02-11 14:26:29','2022-02-11 14:26:29'),(35,'delete_rental_unit','web','2022-02-11 14:26:29','2022-02-11 14:26:29'),(36,'access_tenant','web','2022-02-17 21:50:51','2022-02-17 21:50:51'),(37,'add_tenant','web','2022-02-17 21:50:51','2022-02-17 21:50:51'),(38,'view_tenant','web','2022-02-17 21:50:51','2022-02-17 21:50:51'),(39,'edit_tenant','web','2022-02-17 21:50:52','2022-02-17 21:50:52'),(40,'delete_tenant','web','2022-02-17 21:50:52','2022-02-17 21:50:52'),(41,'edit_app_setting','web','2022-03-16 11:33:33','2022-03-16 11:33:33'),(42,'edit_tax','web','2022-03-16 11:33:34','2022-03-16 11:33:34'),(43,'access_rent_payment','web','2022-03-26 13:12:01','2022-03-26 13:12:01'),(44,'add_rent_payment','web','2022-03-26 13:12:02','2022-03-26 13:12:02'),(45,'edit_rent_payment','web','2022-03-26 13:12:02','2022-03-26 13:12:02'),(46,'view_rent_payment','web','2022-03-26 13:12:02','2022-03-26 13:12:02'),(47,'delete_rent_payment','web','2022-03-26 13:12:02','2022-03-26 13:12:02'),(48,'access_landlord_voucher','web','2022-04-13 13:37:39','2022-04-13 13:37:39'),(49,'add_landlord_voucher','web','2022-04-13 13:37:39','2022-04-13 13:37:39'),(50,'edit_landlord_voucher','web','2022-04-13 13:37:39','2022-04-13 13:37:39'),(51,'view_landlord_voucher','web','2022-04-13 13:37:39','2022-04-13 13:37:39'),(52,'delete_landlord_voucher','web','2022-04-13 13:37:39','2022-04-13 13:37:39');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (19,'App\\Models\\Admins',3,'test','476a73321637220887d2954521fb907e2e33529e1e53b3fea5f995c1828e5654','[\"*\"]',NULL,'2021-09-16 08:50:13','2021-09-16 08:50:13'),(96,'App\\Models\\Admins',1,'superAdmin','1f971278c9e12c5dabfaca07e8efe584b1dff824ff42ffb5c28eea3ba5f71df1','[\"*\"]',NULL,'2022-04-13 13:44:58','2022-04-13 13:44:58'),(97,'App\\Models\\Admins',1,'superAdmin','9d1f2c96f4c784b9a001cc75bad7da2404d0c942dde890aefbcc6c788888b079','[\"*\"]',NULL,'2022-04-13 18:35:29','2022-04-13 18:35:29'),(98,'App\\Models\\Admins',1,'superAdmin','831a8f8dd72c01655a3dcef351213efff743436b172947e0a154ba9b8cc6b513','[\"*\"]',NULL,'2022-04-14 05:53:23','2022-04-14 05:53:23'),(99,'App\\Models\\Admins',1,'superAdmin','72a09faffb50459b59a687c93007479d364f91877727d2f4d0d12cf024ef3231','[\"*\"]',NULL,'2022-04-14 11:59:49','2022-04-14 11:59:49'),(100,'App\\Models\\Admins',1,'superAdmin','89580ae5296ae08391fcf48273603a4851a38c0e6fcf9e1461435859dea67003','[\"*\"]',NULL,'2022-04-16 15:44:35','2022-04-16 15:44:35'),(101,'App\\Models\\Admins',1,'superAdmin','ff2050239821bbf6848fb98953232e96a4df2fca77fb23805f137fc1cc328c8c','[\"*\"]',NULL,'2022-04-16 17:14:06','2022-04-16 17:14:06'),(102,'App\\Models\\Admins',1,'superAdmin','0bbb46530ed09c0ff336cf82de04f023d8871d3a8931ae3fec73c3daf218b179','[\"*\"]',NULL,'2022-04-19 15:16:33','2022-04-19 15:16:33'),(103,'App\\Models\\Admins',1,'superAdmin','d194fb9f4c6c62f9d4869552d2a523cf12e930f2081d0ffaae6001640e435ab3','[\"*\"]',NULL,'2022-04-19 19:10:11','2022-04-19 19:10:11'),(104,'App\\Models\\Admins',1,'superAdmin','035f27689b562477f12cf67716519b26ed13236e4468824282047f3d5f93ed18','[\"*\"]',NULL,'2022-04-20 15:12:47','2022-04-20 15:12:47'),(105,'App\\Models\\Admins',1,'superAdmin','0ccb946ec808086016daf15c09c166fc7c546aebd03b9efe4a3df08153f87356','[\"*\"]',NULL,'2022-04-22 15:45:58','2022-04-22 15:45:58'),(106,'App\\Models\\Admins',1,'superAdmin','a139222f0316d10d90c7408e7eaf8f9933ba51d4b386cc962848d039c9a6d911','[\"*\"]',NULL,'2022-04-23 09:18:50','2022-04-23 09:18:50'),(107,'App\\Models\\Admins',1,'superAdmin','48b907505791ba188c32e0db0a67347b47d76a5832fa1a5aa2143f9df970f3f6','[\"*\"]',NULL,'2022-04-23 22:43:14','2022-04-23 22:43:14'),(108,'App\\Models\\Admins',1,'superAdmin','06871237e7ec6ddd3eab45338af20cc267384aa5aaedb7c7183e0b4479c70d81','[\"*\"]',NULL,'2022-04-24 11:00:41','2022-04-24 11:00:41'),(109,'App\\Models\\Admins',1,'superAdmin','878dba1761c4880c1d75494cfb217fdaa8cc969b20c093d6c39f41730d628c10','[\"*\"]',NULL,'2022-04-24 15:48:42','2022-04-24 15:48:42'),(110,'App\\Models\\Admins',1,'superAdmin','a170f930bfe75d1159059ba2e6710bfd66b3500eb7a2aa8c6748eef365a5951c','[\"*\"]',NULL,'2022-04-24 19:33:58','2022-04-24 19:33:58'),(111,'App\\Models\\Admins',1,'superAdmin','29879b21f284890dfb779dc6df4ac6f44351204d8aa6cfccebbc1e327a0245e4','[\"*\"]',NULL,'2022-04-25 08:03:27','2022-04-25 08:03:27');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `properties` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `landlord_id` bigint(20) NOT NULL,
  `build_no` varchar(250) DEFAULT NULL,
  `property_name` varchar(250) DEFAULT NULL,
  `district_name` varchar(250) DEFAULT NULL,
  `address` text,
  `notes` text,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `properties` WRITE;
/*!40000 ALTER TABLE `properties` DISABLE KEYS */;
INSERT INTO `properties` VALUES (8,21,'5555','عمارة الياسمين','المتميز','','',1,'2022-04-16 15:47:27','2022-04-16 15:47:27'),(9,22,'1231','النزهة','حي النزهة','','',1,'2022-04-16 17:47:43','2022-04-16 17:47:43'),(10,21,'2','عقار 2','يسشيشسي','','',1,'2022-04-16 19:40:08','2022-04-16 19:40:08'),(11,22,'3','عقار 3','يسيسيي','','',1,'2022-04-16 19:40:21','2022-04-16 19:40:21');
/*!40000 ALTER TABLE `properties` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `rent_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rent_payments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tenant_id` bigint(20) NOT NULL,
  `contract_id` bigint(20) NOT NULL,
  `rental_unit_id` bigint(20) NOT NULL,
  `landlord_id` bigint(20) NOT NULL,
  `property_id` bigint(20) NOT NULL,
  `payment_number` varchar(250) NOT NULL,
  `date_hijri` varchar(250) NOT NULL,
  `date_gregory` varchar(250) NOT NULL,
  `date_type` varchar(250) DEFAULT NULL,
  `date_from` varchar(250) NOT NULL,
  `date_to` varchar(250) NOT NULL,
  `rent_amount` varchar(250) NOT NULL,
  `months_duration` varchar(250) NOT NULL,
  `from_month` varchar(250) NOT NULL,
  `to_month` varchar(250) NOT NULL,
  `selected_months` text NOT NULL,
  `amount_note_statment` text,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=255 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `rent_payments` WRITE;
/*!40000 ALTER TABLE `rent_payments` DISABLE KEYS */;
INSERT INTO `rent_payments` VALUES (254,6,15,9,22,9,'22-61-00003','1443/9/23','2022/04/24','gregory','2022/07/01','2022/08/31','4032.6666666666665','2','07','08','7,8','ttttt',0,'2022-04-24 00:17:21','2022-04-24 00:17:21',NULL),(253,6,15,9,22,9,'22-61-00002','1443/9/23','2022/04/24','gregory','2022/05/01','2022/06/30','4032.6666666666665','2','05','06','5,6','dddddd',0,'2022-04-24 00:13:31','2022-04-24 00:13:31',NULL),(252,6,15,9,22,9,'22-61-00001','1443/7/28','2022/03/01','gregory','2022/02/01','2022/04/30','6050','3','02','04','2,3,4','sdaad',0,'2022-03-01 00:01:18','2022-03-01 00:01:18',NULL);
/*!40000 ALTER TABLE `rent_payments` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `rental_units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rental_units` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `landlord_id` bigint(20) NOT NULL,
  `property_id` bigint(20) NOT NULL,
  `rental_unit_name` varchar(250) DEFAULT NULL,
  `rental_unit_no` varchar(250) DEFAULT NULL,
  `rent_amount` varchar(250) NOT NULL,
  `electric_bill` varchar(250) DEFAULT NULL,
  `rental_unit_desc` text,
  `special_notes` text,
  `print_notes` text,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `rental_units` WRITE;
/*!40000 ALTER TABLE `rental_units` DISABLE KEYS */;
INSERT INTO `rental_units` VALUES (9,22,9,'وحدة رقم 28','28','22000','','شقه غرفتين','','',1,'2022-04-16 17:49:43','2022-04-16 17:49:43'),(8,21,8,'test','1','22000','','test','','',1,'2022-04-16 15:49:33','2022-04-16 15:49:33'),(11,21,10,'dsadas','3232','20000','','dasdas','','',1,'2022-04-16 19:43:48','2022-04-16 19:43:48');
/*!40000 ALTER TABLE `rental_units` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `role_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `role_has_permissions` WRITE;
/*!40000 ALTER TABLE `role_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `tenants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tenants` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tenant_name` varchar(250) DEFAULT NULL,
  `id_number` varchar(250) DEFAULT NULL,
  `dob` varchar(250) DEFAULT NULL,
  `phone` varchar(250) DEFAULT NULL,
  `nationality_id` varchar(250) DEFAULT NULL,
  `company_name` varchar(250) DEFAULT NULL,
  `tax_registration_num` varchar(250) DEFAULT NULL,
  `commercial_register` varchar(250) DEFAULT NULL,
  `com_reg_expired_date` varchar(250) DEFAULT NULL,
  `national_address` varchar(250) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL,
  `taxable` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `tenants` WRITE;
/*!40000 ALTER TABLE `tenants` DISABLE KEYS */;
INSERT INTO `tenants` VALUES (6,'mdee','3232323','2022-04-30','323232','5','sdsadsadsad','3232323','323232','2022-04-30','',1,1,'2022-04-23 17:47:29','2022-04-23 17:47:29');
/*!40000 ALTER TABLE `tenants` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `mobile_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chat_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `msisdn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastActive` datetime DEFAULT NULL,
  `lang_id` bigint(20) unsigned NOT NULL,
  `error` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_lang_id_foreign` (`lang_id`)
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (125,'Osama Esmail',NULL,NULL,'2021-07-03 19:21:21','2021-07-14 17:21:14',NULL,NULL,'1358931364','2021-07-14 19:21:14',2,0),(126,'Abdelrhman Tarek',NULL,NULL,'2021-07-03 19:51:35','2021-08-15 12:22:19',NULL,NULL,'1894534313','2021-08-15 14:22:19',2,0),(127,'Ahmed',NULL,NULL,'2021-07-03 22:11:12','2021-08-10 06:14:29',NULL,'201282668414@c.us','201282668414','2021-08-10 08:14:29',2,0),(128,'Hend Adam',NULL,NULL,'2021-07-05 10:23:56','2021-07-06 20:51:55',NULL,NULL,'1815987982','2021-07-06 22:51:55',2,0),(129,'Mohamed Medhat ',NULL,NULL,'2021-07-05 10:23:58','2021-07-11 05:25:06',NULL,NULL,'1548995778','2021-07-11 07:25:06',2,0),(130,'Lubna Borini',NULL,NULL,'2021-07-11 10:30:15','2021-07-11 10:30:24',NULL,NULL,'1851488683','2021-07-11 12:30:24',2,0),(131,'Khaldoun ',NULL,NULL,'2021-07-11 10:31:02','2021-07-11 10:31:02',NULL,NULL,'1061787067','2021-07-11 12:31:02',2,0),(132,'Ziad Elshazly',NULL,NULL,'2021-07-12 05:57:39','2021-07-12 10:06:24',NULL,NULL,'1468357618','2021-07-12 12:06:24',2,0),(133,' ',NULL,NULL,'2021-07-31 16:09:29','2021-07-31 16:09:29',NULL,'','false_201282668419@c.us_3EB066CB0C486AB08911',NULL,2,0),(134,'Abdelrhman Tarek',NULL,NULL,'2021-08-11 12:24:38','2021-08-19 09:46:49',NULL,'1','201553990162','2021-08-19 11:46:49',2,0),(135,'Hend Adam',NULL,NULL,'2021-08-11 13:30:31','2021-08-11 13:56:07',NULL,'ABEGIBFXkSWEAhC95GXiNoQ9BP1EkUdixQ0c','201157912584','2021-08-11 15:30:31',2,0),(136,'Mohamed Medhat',NULL,NULL,'2021-08-11 14:36:29','2021-08-11 14:36:29',NULL,'ABEGIBCVAAeWAgo-sI37ZqqH7X7T','201095000796','2021-08-11 16:36:29',2,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

