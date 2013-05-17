
CREATE TABLE `autos`.`_offer_status` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`name` VARCHAR( 50 ) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

insert into _offer_status (name) values 
     
('valid'),
('expired'),
('deleted')
;