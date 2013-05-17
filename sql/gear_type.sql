CREATE TABLE `autos`.`gear_type` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`en` VARCHAR( 50 ) NOT NULL ,
`ar` VARCHAR( 50 ) NOT NULL,
`de` VARCHAR( 50 ) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO `autos`.`gear_type` (`en`, `ar`, `de`) VALUES 
('Automatic', 'أوتوماتيك', 'Automatik'),
('Half Automatic', 'نصف أوتوماتيك', 'Halbautomat'),
('Manual', 'يدوى', 'Handschaltung'),
('Tiptronic', 'تيبترونيك', 'Tiptronic')
;