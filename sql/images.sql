CREATE TABLE `autos`.`images` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR( 50 ) NOT NULL,
/*imgType is either full or preview*/
`imgType` VARCHAR(10) NOT NULL,
`image` MEDIUMBLOB NOT NULL,
`offer_uid` VARCHAR(30) NOT NULL,
INDEX ( `offer_uid` ),
INDEX ( `imgType` ),
FOREIGN KEY (offer_uid) REFERENCES pkw_offers(offer_uid) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE `autos`.`images` ADD UNIQUE `name_idx` ( `name` ( 50 ) );