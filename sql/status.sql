
CREATE TABLE `autos`.`status` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`en` VARCHAR( 50 ) NOT NULL ,
`ar` VARCHAR( 50 ) NOT NULL,
`de` VARCHAR( 50 ) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

insert into status (en,ar, de) values 
     
('New','جديد', 'Neu'),
('Used','مستعمل', 'Gebraucht'),
('Damaged','معطوب', 'Beschädigt')
;
