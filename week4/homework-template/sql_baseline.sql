CREATE DATABASE IF NOT EXISTS `mealsharing`;

USE `mealsharing`;

CREATE TABLE `mealsharing`.`meals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL DEFAULT '',
  `maxNumberOfGuests` tinyint(4) NOT NULL DEFAULT '1',
  `description` text,
  `price` int(10) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `mealsharing`.`reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mealId` int(11) NULL,
  `content` text,
  `numberOfStars` tinyint(4) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meals_id` FOREIGN KEY (`mealId`) REFERENCES `meals` (`id`) ON DELETE CASCADE
);

CREATE TABLE `mealsharing`.`reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mealId` int(11) NULL,
  `name` varchar(150) NOT NULL DEFAULT '',
  `email` varchar(150) NOT NULL DEFAULT '',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meals_reservations_id` FOREIGN KEY (`mealId`) REFERENCES `meals` (`id`) ON DELETE CASCADE
);

INSERT INTO `mealsharing`.`meals` (`title`, `maxNumberOfGuests`, `description`, `price`)
  VALUES
  ('New Nordic', 30, 'Fancy basic food at an extravagant price', 1000);

INSERT INTO `mealsharing`.`reservations` (`mealId`, `name`, `email`)
  VALUES
  (1, 'Franz Ferdinand', 'franz@ferdinand.com');

INSERT INTO `mealsharing`.`reviews` (`mealId`, `content`, `numberOfStars`)
  VALUES
  (1, 'Extremely delicious and simple, but maybe cost a bit too much for some fancy potatoes and dark bread', 4);

