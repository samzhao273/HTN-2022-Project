CREATE SCHEMA `wastedb`;

CREATE TABLE `wastedb`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

CREATE TABLE `wastedb`.`post` (
  `user_id` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `brand` VARCHAR(45) NULL,
  `size` VARCHAR(45) NULL,
  `gender` VARCHAR(45) NULL,
  `tags` VARCHAR(255) NULL,
  `caption` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
FOREIGN KEY (`user_id`) REFERENCES `wastedb`.`user`(`user_id`));

CREATE TABLE `wastedb`.`location` (
  `post_id` INT NOT NULL,
  `latitude` FLOAT NULL,
  `longitude` FLOAT NULL,
  PRIMARY KEY (`post_id`),
FOREIGN KEY (`post_id`) REFERENCES `wastedb`.`post`(`id`));

CREATE TABLE `wastedb`.`bins` (
  `bid` INT NOT NULL AUTO_INCREMENT,
  `latitude` FLOAT NULL,
  `longitude` FLOAT NULL,
  PRIMARY KEY (`bid`));
