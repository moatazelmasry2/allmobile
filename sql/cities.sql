CREATE TABLE `autos`.`cities` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`en` VARCHAR( 50 ) NOT NULL ,
`ar` VARCHAR( 50 ) NOT NULL ,
`de` VARCHAR( 50 ) NOT NULL ,
`countryID` INT NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

ALTER TABLE `cities`
  ADD CONSTRAINT `countryFK` FOREIGN KEY (`countryID`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
  
INSERT into cities (en, ar, de, countryID) SELECT 'Cairo', 'القاهره', 'Kairo', countries.id FROM countries WHERE countries.en='Egypt';
INSERT into cities (en, ar, de, countryID) SELECT 'Alexandria', '', 'Alexandria', countries.id FROM countries WHERE countries.en='Egypt';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
INSERT into cities (en, ar, de, countryID) SELECT '', '', '', countries.id FROM countries WHERE countries.en='';
