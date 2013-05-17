CREATE TABLE `autos`.`pkw_categories` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`en` VARCHAR( 50 ) NOT NULL,
`ar` VARCHAR( 50 ) NOT NULL,
`de` VARCHAR( 50 ) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

insert into pkw_categories (en,ar, de) values 
     
('Convertible','سيارة كشف', 'Cabrio'),
('Pickup truck','بيك أب / سيارة نقل', 'Gelände Wagen'),
('Small car','سيارة صغيرة', 'Kleinwagen'),
('Station wagon','سيارة ستايشن/واغن', 'Kombi'),
('Sedan','سيارة عائلية', 'Limousine'),
('Cross/SUV','جيب / رباعي الدفع', 'Cross/SUV'),
('Sports car/Coupe','سيارة كوبيه/رياضيه', 'Sport/Coup&#233;'),
('Van/Minibus','فان /باص صغير', 'Van/Kleinbus'),
('Roadster','رودستر', 'Roadster'),
('other','مختلف', 'Sonstige')
;


