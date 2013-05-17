CREATE TABLE `autos`.`oil_types` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`en` VARCHAR( 50 ) NOT NULL ,
`ar` VARCHAR( 50 ) NOT NULL,
`de` VARCHAR( 50 ) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO `autos`.`oil_types` (en, ar, de) VALUES 
('Diesel', 'ديزل', 'Diesel'),
('Benzin', 'بنزين','Benzin'),
('Electric', 'كهربائيه', 'Elektro'),
('Gas', 'غاز', 'Gas'),
('Other', 'أخرى', 'Sonstige')
;