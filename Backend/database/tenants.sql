-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 06, 2022 at 11:42 PM
-- Server version: 5.7.31
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tenants`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `isSuperAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `name`, `mobile_phone`, `password`, `isActive`, `isSuperAdmin`, `created_at`, `updated_at`) VALUES
(1, 'super_admin@admin.com', 'superAdmin', '01286515090', '$2a$12$o69GkM4WL5fF6rA8O3gL7.6xIrDAcwbEB3WQtMket5fzzaRHzDybK', 1, 1, '2021-09-08 14:05:15', '2021-09-09 05:49:22'),
(2, 'test@g.com', 'test', '01023232323', '$2y$10$gQ02qhE0gpsL3DkZhl/SK.Nyn.eP2wk/doCj58K.Y0dOJzh5LYahy', 1, 0, '2022-05-04 10:03:51', '2022-05-04 10:03:51');

-- --------------------------------------------------------

--
-- Table structure for table `app_settings`
--

DROP TABLE IF EXISTS `app_settings`;
CREATE TABLE IF NOT EXISTS `app_settings` (
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

--
-- Dumping data for table `app_settings`
--

INSERT INTO `app_settings` (`id`, `company_name`, `registration_num`, `account_num`, `email`, `tax`, `national_address`, `created_at`, `updated_at`) VALUES
(1, 'dasdsa', '32132131', '323213123', 'dasdsa@g.com', '10', '', NULL, '2022-03-16 15:22:49');

-- --------------------------------------------------------

--
-- Table structure for table `contracts`
--

DROP TABLE IF EXISTS `contracts`;
CREATE TABLE IF NOT EXISTS `contracts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tenant_id` bigint(20) NOT NULL,
  `property_id` bigint(20) NOT NULL,
  `rental_unit_id` bigint(20) NOT NULL,
  `landlord_id` bigint(20) NOT NULL,
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
  `created_at_hijri` varchar(250) DEFAULT NULL,
  `created_at_gregory` varchar(250) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contracts`
--

INSERT INTO `contracts` (`id`, `tenant_id`, `property_id`, `rental_unit_id`, `landlord_id`, `tenant_code`, `date_type`, `start_electricity_meter`, `payment_type`, `rent_start_date_hijri`, `rent_start_date_gregory`, `rent_end_date_hijri`, `rent_end_date_gregory`, `months_duration`, `e_contract_number`, `e_contract_start_date`, `e_contract_end_date`, `notes_about_tenant`, `communications_notes`, `notes_before_receipt`, `notes_for_receipt`, `extra_notes_1`, `extra_notes_2`, `contract_amount`, `taxable`, `isActive`, `isStopped`, `stop_reason`, `stop_at`, `created_at_hijri`, `created_at_gregory`, `created_at`, `updated_at`) VALUES
(25, 18, 8, 14, 21, '8-14', 'gregory', '323223', '1', '1443/6/29', '2022/02/01', '1443/12/30', '2022/12/31', '11', '', '', '', '', '', '', '', '', '', '30250.00', 1, 1, 0, NULL, NULL, '1443/10/4', '2022/05/05', '2022-05-05 11:59:44', '2022-05-05 13:48:20'),
(24, 17, 8, 13, 21, '8-13', 'gregory', '34343434', '1', '1443/9/29', '2022/04/30', '1443/12/30', '2022/12/31', '9', '', '', '', '', '', '', '', '', '', '16500.00', 1, 1, 0, NULL, NULL, '1443/9/29', '2022/04/30', '2022-04-30 12:36:12', '2022-04-30 12:36:12'),
(22, 15, 9, 9, 22, '9-9', 'gregory', '434343434', '1', '1443/7/29', '2022/03/02', '1443/12/30', '2022/12/31', '10', '434343443434', '', '', '', '', '', '', '', '', '20166.33', 1, 1, 0, NULL, NULL, '1443/9/28', '2022/04/29', '2022-04-29 19:32:09', '2022-04-29 21:29:20');

-- --------------------------------------------------------

--
-- Table structure for table `landlords`
--

DROP TABLE IF EXISTS `landlords`;
CREATE TABLE IF NOT EXISTS `landlords` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
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

--
-- Dumping data for table `landlords`
--

INSERT INTO `landlords` (`id`, `landlord_name`, `agent_name`, `nationality_id`, `id_number`, `id_source`, `id_date`, `mobile`, `phone`, `email`, `notes`, `isActive`, `created_at`, `updated_at`) VALUES
(21, 'محمد مدحت كمال محمد', '', '5', '', '', '', '', '', '', '', 1, '2022-04-16 15:46:42', '2022-04-16 15:46:42'),
(22, 'عبد الحميد', '', '5', '', '', '', '', '', '', '', 1, '2022-04-16 17:47:08', '2022-04-16 17:47:08');

-- --------------------------------------------------------

--
-- Table structure for table `landlord_vouchers`
--

DROP TABLE IF EXISTS `landlord_vouchers`;
CREATE TABLE IF NOT EXISTS `landlord_vouchers` (
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
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `landlord_vouchers`
--

INSERT INTO `landlord_vouchers` (`id`, `voucher_type`, `voucher_number`, `voucher_date_gregory`, `voucher_date_hijri`, `landlord_id`, `amount`, `payment_type`, `amount_note_statment`, `isDeleted`, `deleted_at`, `created_at`, `updated_at`) VALUES
(17, 'payment', '22-53-00004', '2022/04/29', '1443/9/28', 21, '1666', 'cash', 'dsadasdsad', 0, NULL, '2022-04-29 12:38:16', '2022-04-29 12:38:16'),
(15, 'payment', '22-53-00002', '2022/04/29', '1443/9/28', 22, '1000', 'cash', 'dasdasda', 0, NULL, '2022-04-29 21:24:09', '2022-04-29 21:24:09'),
(16, 'receipt', '22-54-00003', '2022/04/29', '1443/9/28', 22, '2000', 'cash', 'dasdasdas', 0, NULL, '2022-04-29 21:24:25', '2022-04-29 21:24:25'),
(14, 'payment', '22-53-00001', '2022/04/29', '1443/9/28', 22, '2000', 'cash', 'dsdasdas', 0, NULL, '2022-04-29 21:23:21', '2022-04-29 21:23:21'),
(18, 'receipt', '22-54-00005', '2022/04/29', '1443/9/28', 21, '0', 'cash', 'gdsfsdf', 1, '2022-05-05 10:53:39', '2022-04-29 12:38:37', '2022-05-05 10:53:39');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
CREATE TABLE IF NOT EXISTS `media` (
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
) ENGINE=MyISAM AUTO_INCREMENT=129 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `mediable_id`, `mediable_type`, `name`, `type`, `path`, `size`, `attribute`, `created_at`, `updated_at`) VALUES
(128, 1, 'App\\Models\\AppSetting', 'logo.png', 'png', 'tenants/app_setting/logo/logo.png', '8.47 KB', 'logo', '2022-04-26 16:24:53', '2022-04-26 16:24:53'),
(125, 1, 'App\\Models\\AppSetting', '1-1650146327-Screenshot 2022-04-06 003022.png', 'png', 'tenants/app_setting/contract_header/1-1650146327-Screenshot 2022-04-06 003022.png', '109.67 KB', 'contract_header', '2022-04-16 19:58:47', '2022-04-16 19:58:47');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(35, '2019_12_14_000001_create_personal_access_tokens_table', 17),
(36, '2021_08_10_211500_create_admins_table', 17),
(37, '2021_08_10_211713_create_permission_tables', 17),
(41, '2021_09_11_223628_create_notifications_table', 20),
(42, '2022_05_06_234103_create_admins_table', 0),
(43, '2022_05_06_234103_create_app_settings_table', 0),
(44, '2022_05_06_234103_create_contracts_table', 0),
(45, '2022_05_06_234103_create_landlord_vouchers_table', 0),
(46, '2022_05_06_234103_create_landlords_table', 0),
(47, '2022_05_06_234103_create_media_table', 0),
(48, '2022_05_06_234103_create_model_has_permissions_table', 0),
(49, '2022_05_06_234103_create_model_has_roles_table', 0),
(50, '2022_05_06_234103_create_nationalities_table', 0),
(51, '2022_05_06_234103_create_notifications_table', 0),
(52, '2022_05_06_234103_create_password_resets_table', 0),
(53, '2022_05_06_234103_create_permissions_table', 0),
(54, '2022_05_06_234103_create_personal_access_tokens_table', 0),
(55, '2022_05_06_234103_create_properties_table', 0),
(56, '2022_05_06_234103_create_rent_payments_table', 0),
(57, '2022_05_06_234103_create_rental_units_table', 0),
(58, '2022_05_06_234103_create_role_has_permissions_table', 0),
(59, '2022_05_06_234103_create_roles_table', 0),
(60, '2022_05_06_234103_create_tenants_table', 0),
(61, '2022_05_06_234103_create_users_table', 0);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
CREATE TABLE IF NOT EXISTS `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `model_has_permissions`
--

INSERT INTO `model_has_permissions` (`permission_id`, `model_type`, `model_id`) VALUES
(2, 'App\\Models\\Admins', 1),
(3, 'App\\Models\\Admins', 1),
(4, 'App\\Models\\Admins', 1),
(5, 'App\\Models\\Admins', 1),
(6, 'App\\Models\\Admins', 1),
(7, 'App\\Models\\Admins', 1),
(15, 'App\\Models\\Admins', 1),
(16, 'App\\Models\\Admins', 1),
(17, 'App\\Models\\Admins', 1),
(18, 'App\\Models\\Admins', 1),
(19, 'App\\Models\\Admins', 1),
(20, 'App\\Models\\Admins', 1),
(21, 'App\\Models\\Admins', 1),
(22, 'App\\Models\\Admins', 1),
(23, 'App\\Models\\Admins', 1),
(24, 'App\\Models\\Admins', 1),
(25, 'App\\Models\\Admins', 1),
(26, 'App\\Models\\Admins', 1),
(27, 'App\\Models\\Admins', 1),
(28, 'App\\Models\\Admins', 1),
(29, 'App\\Models\\Admins', 1),
(30, 'App\\Models\\Admins', 1),
(31, 'App\\Models\\Admins', 1),
(32, 'App\\Models\\Admins', 1),
(33, 'App\\Models\\Admins', 1),
(34, 'App\\Models\\Admins', 1),
(35, 'App\\Models\\Admins', 1),
(36, 'App\\Models\\Admins', 1),
(37, 'App\\Models\\Admins', 1),
(38, 'App\\Models\\Admins', 1),
(39, 'App\\Models\\Admins', 1),
(40, 'App\\Models\\Admins', 1),
(41, 'App\\Models\\Admins', 1),
(42, 'App\\Models\\Admins', 1),
(43, 'App\\Models\\Admins', 1),
(44, 'App\\Models\\Admins', 1),
(45, 'App\\Models\\Admins', 1),
(46, 'App\\Models\\Admins', 1),
(47, 'App\\Models\\Admins', 1),
(48, 'App\\Models\\Admins', 1),
(49, 'App\\Models\\Admins', 1),
(50, 'App\\Models\\Admins', 1),
(51, 'App\\Models\\Admins', 1),
(52, 'App\\Models\\Admins', 1),
(53, 'App\\Models\\Admins', 1),
(54, 'App\\Models\\Admins', 1),
(55, 'App\\Models\\Admins', 1),
(56, 'App\\Models\\Admins', 1),
(57, 'App\\Models\\Admins', 1),
(58, 'App\\Models\\Admins', 1),
(59, 'App\\Models\\Admins', 1),
(2, 'App\\Models\\Admins', 2),
(3, 'App\\Models\\Admins', 2),
(4, 'App\\Models\\Admins', 2),
(5, 'App\\Models\\Admins', 2),
(6, 'App\\Models\\Admins', 2),
(15, 'App\\Models\\Admins', 2),
(16, 'App\\Models\\Admins', 2),
(17, 'App\\Models\\Admins', 2),
(18, 'App\\Models\\Admins', 2),
(19, 'App\\Models\\Admins', 2),
(20, 'App\\Models\\Admins', 2),
(21, 'App\\Models\\Admins', 2),
(22, 'App\\Models\\Admins', 2),
(23, 'App\\Models\\Admins', 2),
(24, 'App\\Models\\Admins', 2),
(25, 'App\\Models\\Admins', 2),
(26, 'App\\Models\\Admins', 2),
(27, 'App\\Models\\Admins', 2),
(28, 'App\\Models\\Admins', 2),
(29, 'App\\Models\\Admins', 2),
(30, 'App\\Models\\Admins', 2),
(31, 'App\\Models\\Admins', 2),
(32, 'App\\Models\\Admins', 2),
(33, 'App\\Models\\Admins', 2),
(34, 'App\\Models\\Admins', 2),
(35, 'App\\Models\\Admins', 2),
(36, 'App\\Models\\Admins', 2),
(37, 'App\\Models\\Admins', 2),
(38, 'App\\Models\\Admins', 2),
(39, 'App\\Models\\Admins', 2),
(40, 'App\\Models\\Admins', 2),
(41, 'App\\Models\\Admins', 2),
(42, 'App\\Models\\Admins', 2),
(43, 'App\\Models\\Admins', 2),
(44, 'App\\Models\\Admins', 2),
(45, 'App\\Models\\Admins', 2),
(46, 'App\\Models\\Admins', 2),
(47, 'App\\Models\\Admins', 2),
(48, 'App\\Models\\Admins', 2),
(49, 'App\\Models\\Admins', 2),
(50, 'App\\Models\\Admins', 2),
(51, 'App\\Models\\Admins', 2),
(52, 'App\\Models\\Admins', 2),
(53, 'App\\Models\\Admins', 2),
(54, 'App\\Models\\Admins', 2),
(55, 'App\\Models\\Admins', 2),
(56, 'App\\Models\\Admins', 2),
(57, 'App\\Models\\Admins', 2),
(58, 'App\\Models\\Admins', 2),
(59, 'App\\Models\\Admins', 2);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
CREATE TABLE IF NOT EXISTS `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `nationalities`
--

DROP TABLE IF EXISTS `nationalities`;
CREATE TABLE IF NOT EXISTS `nationalities` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nationalities`
--

INSERT INTO `nationalities` (`id`, `name`, `created_at`, `updated_at`) VALUES
(5, 'مصري', '2022-02-12 09:45:20', '2022-02-12 09:45:20'),
(4, 'سعودي', '2022-02-12 09:45:15', '2022-02-12 09:45:15'),
(7, 'هندي', '2022-02-15 16:17:18', '2022-02-15 16:17:18');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(2, 'add_admin', 'web', '2021-08-23 04:28:02', '2021-08-23 04:28:02'),
(3, 'view_admin', 'web', '2021-08-23 04:28:02', '2021-08-23 04:28:02'),
(4, 'edit_admin', 'web', '2021-08-23 04:28:02', '2021-08-23 04:28:02'),
(5, 'delete_admin', 'web', '2021-08-23 04:28:02', '2021-08-23 04:28:02'),
(6, 'active_admin', 'web', '2021-08-23 04:28:02', '2021-08-23 04:28:02'),
(7, 'admin_permissions', 'web', '2021-08-23 04:28:02', '2021-08-23 04:28:02'),
(15, 'access_admin', 'web', '2022-02-09 12:09:45', '2022-02-09 12:09:45'),
(16, 'access_landlord', 'web', '2022-02-10 06:23:39', '2022-02-10 06:23:39'),
(17, 'view_landlord', 'web', '2022-02-10 06:23:41', '2022-02-10 06:23:41'),
(18, 'edit_landlord', 'web', '2022-02-10 06:23:41', '2022-02-10 06:23:41'),
(19, 'delete_landlord', 'web', '2022-02-10 06:23:41', '2022-02-10 06:23:41'),
(20, 'add_landlord', 'web', '2022-02-10 07:19:12', '2022-02-10 07:19:12'),
(21, 'access_nationality', 'web', '2022-02-10 17:44:16', '2022-02-10 17:44:16'),
(22, 'add_nationality', 'web', '2022-02-10 17:44:16', '2022-02-10 17:44:16'),
(23, 'view_nationality', 'web', '2022-02-10 17:44:16', '2022-02-10 17:44:16'),
(24, 'edit_nationality', 'web', '2022-02-10 17:44:17', '2022-02-10 17:44:17'),
(25, 'delete_nationality', 'web', '2022-02-10 17:44:17', '2022-02-10 17:44:17'),
(26, 'access_property', 'web', '2022-02-11 14:26:28', '2022-02-11 14:26:28'),
(27, 'add_property', 'web', '2022-02-11 14:26:28', '2022-02-11 14:26:28'),
(28, 'view_property', 'web', '2022-02-11 14:26:28', '2022-02-11 14:26:28'),
(29, 'edit_property', 'web', '2022-02-11 14:26:28', '2022-02-11 14:26:28'),
(30, 'delete_property', 'web', '2022-02-11 14:26:29', '2022-02-11 14:26:29'),
(31, 'access_rental_unit', 'web', '2022-02-11 14:26:29', '2022-02-11 14:26:29'),
(32, 'add_rental_unit', 'web', '2022-02-11 14:26:29', '2022-02-11 14:26:29'),
(33, 'view_rental_unit', 'web', '2022-02-11 14:26:29', '2022-02-11 14:26:29'),
(34, 'edit_rental_unit', 'web', '2022-02-11 14:26:29', '2022-02-11 14:26:29'),
(35, 'delete_rental_unit', 'web', '2022-02-11 14:26:29', '2022-02-11 14:26:29'),
(36, 'access_tenant', 'web', '2022-02-17 21:50:51', '2022-02-17 21:50:51'),
(37, 'add_tenant', 'web', '2022-02-17 21:50:51', '2022-02-17 21:50:51'),
(38, 'view_tenant', 'web', '2022-02-17 21:50:51', '2022-02-17 21:50:51'),
(39, 'edit_tenant', 'web', '2022-02-17 21:50:52', '2022-02-17 21:50:52'),
(40, 'delete_tenant', 'web', '2022-02-17 21:50:52', '2022-02-17 21:50:52'),
(41, 'edit_app_setting', 'web', '2022-03-16 11:33:33', '2022-03-16 11:33:33'),
(42, 'edit_tax', 'web', '2022-03-16 11:33:34', '2022-03-16 11:33:34'),
(43, 'access_rent_payment', 'web', '2022-03-26 13:12:01', '2022-03-26 13:12:01'),
(44, 'add_rent_payment', 'web', '2022-03-26 13:12:02', '2022-03-26 13:12:02'),
(45, 'edit_rent_payment', 'web', '2022-03-26 13:12:02', '2022-03-26 13:12:02'),
(46, 'view_rent_payment', 'web', '2022-03-26 13:12:02', '2022-03-26 13:12:02'),
(47, 'delete_rent_payment', 'web', '2022-03-26 13:12:02', '2022-03-26 13:12:02'),
(48, 'access_landlord_voucher', 'web', '2022-04-13 13:37:39', '2022-04-13 13:37:39'),
(49, 'add_landlord_voucher', 'web', '2022-04-13 13:37:39', '2022-04-13 13:37:39'),
(50, 'edit_landlord_voucher', 'web', '2022-04-13 13:37:39', '2022-04-13 13:37:39'),
(51, 'view_landlord_voucher', 'web', '2022-04-13 13:37:39', '2022-04-13 13:37:39'),
(52, 'delete_landlord_voucher', 'web', '2022-04-13 13:37:39', '2022-04-13 13:37:39'),
(53, 'view_completed_report', 'web', '2022-05-04 11:34:52', '2022-05-04 11:34:52'),
(54, 'view_landlord_account_statement', 'web', '2022-05-04 11:35:00', '2022-05-04 11:35:00'),
(55, 'view_tenant_account_statement', 'web', '2022-05-04 11:35:00', '2022-05-04 11:35:00'),
(56, 'view_tenants_report', 'web', '2022-05-04 11:35:00', '2022-05-04 11:35:00'),
(57, 'view_rental_units_report', 'web', '2022-05-04 11:35:00', '2022-05-04 11:35:00'),
(58, 'view_incoming_bonds', 'web', '2022-05-04 11:35:00', '2022-05-04 11:35:00'),
(59, 'view_daily_report', 'web', '2022-05-04 11:35:00', '2022-05-04 11:35:00');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(19, 'App\\Models\\Admins', 3, 'test', '476a73321637220887d2954521fb907e2e33529e1e53b3fea5f995c1828e5654', '[\"*\"]', NULL, '2021-09-16 08:50:13', '2021-09-16 08:50:13'),
(140, 'App\\Models\\Admins', 1, 'superAdmin', '7828b1d4758bef96f7d84ed6359e8e64dc5a2057675e7db7e8f1452f4f119717', '[\"*\"]', NULL, '2022-05-04 12:10:18', '2022-05-04 12:10:18'),
(141, 'App\\Models\\Admins', 1, 'superAdmin', '3b5aa5754e8f3db9a88f81f838b49909a74b64f7f2dadf718ffa22291373a9a8', '[\"*\"]', NULL, '2022-05-04 16:06:19', '2022-05-04 16:06:19'),
(142, 'App\\Models\\Admins', 1, 'superAdmin', '5ee2cc6e2d4b928194a5630cb2ede46ae11c040efaeb46c5dc69b869e0cdff82', '[\"*\"]', NULL, '2022-05-05 09:18:25', '2022-05-05 09:18:25'),
(143, 'App\\Models\\Admins', 1, 'superAdmin', '2c20e2efa58f720fcbc13649dd7be5dd0cf43dc794ac9919c90c5b336cb207b9', '[\"*\"]', NULL, '2022-05-05 20:31:02', '2022-05-05 20:31:02'),
(144, 'App\\Models\\Admins', 1, 'superAdmin', '3733c5b9bfcff780e8f95a841b65075357848804600e881d11ae50e4befb1fcb', '[\"*\"]', NULL, '2022-05-06 09:26:37', '2022-05-06 09:26:37');

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

DROP TABLE IF EXISTS `properties`;
CREATE TABLE IF NOT EXISTS `properties` (
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

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `landlord_id`, `build_no`, `property_name`, `district_name`, `address`, `notes`, `isActive`, `created_at`, `updated_at`) VALUES
(8, 21, '5555', 'عمارة الياسمين', 'المتميز', '', '', 1, '2022-04-16 15:47:27', '2022-04-16 15:47:27'),
(9, 22, '1231', 'النزهة', 'حي النزهة', '', '', 1, '2022-04-16 17:47:43', '2022-04-16 17:47:43'),
(10, 21, '2', 'عقار 2', 'يسشيشسي', '', '', 1, '2022-04-16 19:40:08', '2022-04-16 19:40:08'),
(11, 22, '3', 'عقار 3', 'يسيسيي', '', '', 1, '2022-04-16 19:40:21', '2022-04-16 19:40:21');

-- --------------------------------------------------------

--
-- Table structure for table `rental_units`
--

DROP TABLE IF EXISTS `rental_units`;
CREATE TABLE IF NOT EXISTS `rental_units` (
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
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rental_units`
--

INSERT INTO `rental_units` (`id`, `landlord_id`, `property_id`, `rental_unit_name`, `rental_unit_no`, `rent_amount`, `electric_bill`, `rental_unit_desc`, `special_notes`, `print_notes`, `isActive`, `created_at`, `updated_at`) VALUES
(14, 21, 8, 'test 3', '32323', '30000', '0', 'gfdgdfgfdg', '', '', 1, '2022-05-02 14:11:08', '2022-05-02 14:11:08'),
(9, 22, 9, 'وحدة رقم 28', '28', '22000', '', 'شقه غرفتين', '', '', 1, '2022-04-16 17:49:43', '2022-04-16 17:49:43'),
(13, 21, 8, 'شقه تابعه لمحمد مدحت', '32323232', '20000', '', 'ffdsfdsfsdf', '', '', 1, '2022-04-30 12:34:27', '2022-04-30 12:35:38'),
(12, 22, 9, 'test', '222', '15000', '', 'test', '', '', 1, '2022-04-29 20:23:55', '2022-04-29 20:23:55'),
(15, 21, 8, 'اختبار', '32323', '22000', '', 'للبيليبل', '', '', 1, '2022-03-04 10:11:12', '2022-05-06 10:11:12');

-- --------------------------------------------------------

--
-- Table structure for table `rent_payments`
--

DROP TABLE IF EXISTS `rent_payments`;
CREATE TABLE IF NOT EXISTS `rent_payments` (
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
  `rent_amount_before_tax` varchar(250) NOT NULL,
  `tax_value` varchar(250) NOT NULL,
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
) ENGINE=MyISAM AUTO_INCREMENT=271 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rent_payments`
--

INSERT INTO `rent_payments` (`id`, `tenant_id`, `contract_id`, `rental_unit_id`, `landlord_id`, `property_id`, `payment_number`, `date_hijri`, `date_gregory`, `date_type`, `date_from`, `date_to`, `rent_amount`, `rent_amount_before_tax`, `tax_value`, `months_duration`, `from_month`, `to_month`, `selected_months`, `amount_note_statment`, `isDeleted`, `created_at`, `updated_at`, `deleted_at`) VALUES
(268, 18, 25, 14, 21, 8, '22-61-00003', '1443/10/4', '2022/05/05', 'gregory', '2022/02/01', '2022/03/31', '5500', '5000', '500', '2', '02', '03', '2,3', 'dsad', 0, '2022-05-05 13:47:28', '2022-05-05 13:48:33', NULL),
(269, 18, 25, 14, 21, 8, '22-61-00004', '1443/10/4', '2022/05/05', 'gregory', '', '', '0', '5000', '500', '2', '04', '05', '4,5', 'ww', 1, '2022-05-05 13:49:02', '2022-05-05 13:49:52', '2022-05-05 13:49:52'),
(259, 17, 24, 13, 21, 8, '22-61-00003', '1443/9/29', '2022/04/30', 'gregory', '2022/04/01', '2022/05/31', '3666.3333333333335', '3333.3333333333335', '333', '2', '04', '05', '4,5', 'dasdasdasd', 0, '2022-04-29 12:36:52', '2022-04-29 12:36:52', NULL),
(258, 15, 22, 9, 22, 9, '22-61-00002', '1443/9/29', '2022/04/30', 'gregory', '2022/05/01', '2022/06/30', '4032.6666666666665', '3666.6666666666665', '366', '2', '05', '06', '5,6', 'fdsfsfsd', 0, '2022-04-29 14:42:30', '2022-04-29 21:22:23', NULL),
(257, 15, 22, 9, 22, 9, '22-61-00001', '1443/9/29', '2022/04/30', 'gregory', '2022/03/01', '2022/04/30', '4032.6666666666665', '3666.6666666666665', '366', '2', '03', '04', '3,4', 'dsdsd', 0, '2022-04-29 21:22:11', '2022-04-29 21:22:11', NULL),
(270, 18, 25, 14, 21, 8, '22-61-00005', '1443/10/4', '2022/05/05', 'gregory', '2022/04/01', '2022/05/31', '5500', '5000', '500', '2', '04', '05', '4,5', 'dasda', 0, '2022-05-05 13:54:21', '2022-05-05 13:54:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
CREATE TABLE IF NOT EXISTS `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `tenants`
--

DROP TABLE IF EXISTS `tenants`;
CREATE TABLE IF NOT EXISTS `tenants` (
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
  `isDefaulted` tinyint(1) NOT NULL DEFAULT '1',
  `taxable` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tenants`
--

INSERT INTO `tenants` (`id`, `tenant_name`, `id_number`, `dob`, `phone`, `nationality_id`, `company_name`, `tax_registration_num`, `commercial_register`, `com_reg_expired_date`, `national_address`, `isActive`, `isDefaulted`, `taxable`, `created_at`, `updated_at`) VALUES
(17, 'hamada', '4343434', '2022-04-30', '433434', '5', 'بيسبسيبيسب', '4343434', '4343434', '2022-04-30', '', 1, 1, 1, '2022-04-30 12:36:12', '2022-04-30 12:36:31'),
(15, 'test', '32323232', '2022-04-30', '232332', '5', 'dsadasdsad', '323232323', '3232323', '2022-04-30', '', 1, 0, 1, '2022-04-29 19:32:09', '2022-04-29 19:32:09'),
(18, 'final', '3232323', '2022-05-05', '323232', '5', '', '', '', '', '', 1, 0, 1, '2022-05-05 11:59:44', '2022-05-05 13:54:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `mobile_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chat_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `msisdn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastActive` datetime DEFAULT NULL,
  `lang_id` bigint(20) UNSIGNED NOT NULL,
  `error` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_lang_id_foreign` (`lang_id`)
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `remember_token`, `created_at`, `updated_at`, `mobile_phone`, `chat_id`, `msisdn`, `lastActive`, `lang_id`, `error`) VALUES
(125, 'Osama Esmail', NULL, NULL, '2021-07-03 19:21:21', '2021-07-14 17:21:14', NULL, NULL, '1358931364', '2021-07-14 19:21:14', 2, 0),
(126, 'Abdelrhman Tarek', NULL, NULL, '2021-07-03 19:51:35', '2021-08-15 12:22:19', NULL, NULL, '1894534313', '2021-08-15 14:22:19', 2, 0),
(127, 'Ahmed', NULL, NULL, '2021-07-03 22:11:12', '2021-08-10 06:14:29', NULL, '201282668414@c.us', '201282668414', '2021-08-10 08:14:29', 2, 0),
(128, 'Hend Adam', NULL, NULL, '2021-07-05 10:23:56', '2021-07-06 20:51:55', NULL, NULL, '1815987982', '2021-07-06 22:51:55', 2, 0),
(129, 'Mohamed Medhat ', NULL, NULL, '2021-07-05 10:23:58', '2021-07-11 05:25:06', NULL, NULL, '1548995778', '2021-07-11 07:25:06', 2, 0),
(130, 'Lubna Borini', NULL, NULL, '2021-07-11 10:30:15', '2021-07-11 10:30:24', NULL, NULL, '1851488683', '2021-07-11 12:30:24', 2, 0),
(131, 'Khaldoun ', NULL, NULL, '2021-07-11 10:31:02', '2021-07-11 10:31:02', NULL, NULL, '1061787067', '2021-07-11 12:31:02', 2, 0),
(132, 'Ziad Elshazly', NULL, NULL, '2021-07-12 05:57:39', '2021-07-12 10:06:24', NULL, NULL, '1468357618', '2021-07-12 12:06:24', 2, 0),
(133, ' ', NULL, NULL, '2021-07-31 16:09:29', '2021-07-31 16:09:29', NULL, '', 'false_201282668419@c.us_3EB066CB0C486AB08911', NULL, 2, 0),
(134, 'Abdelrhman Tarek', NULL, NULL, '2021-08-11 12:24:38', '2021-08-19 09:46:49', NULL, '1', '201553990162', '2021-08-19 11:46:49', 2, 0),
(135, 'Hend Adam', NULL, NULL, '2021-08-11 13:30:31', '2021-08-11 13:56:07', NULL, 'ABEGIBFXkSWEAhC95GXiNoQ9BP1EkUdixQ0c', '201157912584', '2021-08-11 15:30:31', 2, 0),
(136, 'Mohamed Medhat', NULL, NULL, '2021-08-11 14:36:29', '2021-08-11 14:36:29', NULL, 'ABEGIBCVAAeWAgo-sI37ZqqH7X7T', '201095000796', '2021-08-11 16:36:29', 2, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
