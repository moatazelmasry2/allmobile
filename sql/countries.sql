
CREATE TABLE `autos`.`countries` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`en` VARCHAR( 50 ) NOT NULL ,
`ar` VARCHAR( 50 ) NOT NULL,
`de` VARCHAR( 50 ) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

         
insert into countries (en,ar,de) values 

('Algeria','الجزائر', 'Algerien'),
('Bahrain','البحرين', 'Bahrain'),
('Cyprus','قبرص', 'Zypren'),
('Egypt','مصر', 'Ägypten'),
('Iraq','العراق', 'Irak'),
('Iran','ايران', 'Iran'),
('Jordan','الأردن', 'Jordanian'),
('Kuwait','الكويت', 'Kuwait'),
('Lebanon','لبنان', 'Lebanon'),
('Libya','ليبيا', 'Libyen'),
('Morocco','المغرب', 'Morokko'),
('Oman','سلطنة عمان', 'Oman'),
('Palastine','فلسطين', 'Palastina'),
('Qatar','قطر', 'Katar'),
('Saudia Arabia','السعوديه', 'Saudia-Arabien'),
('Sudan','السودان', 'Sudan'),
('Syria','سوريا', 'Syrien'),
('Tunisia','تونس', 'Tunesien'),
('Turkey','تركيا', 'Türkei'),
('United Arab Emirates','الامارات', 'Vereinigte Arabische Emirate'),
('Yemen','اليمن', 'Jemen'),
('Other','أخرى', 'Sonstige')
;