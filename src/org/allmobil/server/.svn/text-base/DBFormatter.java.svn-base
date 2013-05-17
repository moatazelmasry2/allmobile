package org.allmobil.server;

import java.util.Enumeration;
import java.util.Properties;

import org.allmobil.db.Queries;

public class DBFormatter {

    public static void main(String[] args) {

        Properties cars = new Properties();
        cars.put("AC", "-1,323i|224,Cobra|137");
        cars.put("Acura", "-1,TSX|110,NSX|111,TL|120,RSX|130,RL|140,400|141,MDX|150");
        cars.put(
                "Audi",
                "-1,50|151,80|152,90|153,100|154,200|155,A2|156,A3|157,A4|158,A6|159,A8|160,RS|161,S2|162,S3|163,S4|164,S6|165,S8|166,TT|170,V8|171,Q7|172,Allroad|180,Cabriolet|181,Coupe|190,QUATTRO|200");
        cars.put(
                "Alfa Remeo",
                "-1,GT|112,GTV|113,RZ|114,33|115,75|116,90|117,145|118,146|119,147|121,155|122,156|123,159|124,164|125,166|126,Alfasud|127,Alfetta|128,Brera|129,Giulia|131,Giulietta|132,Spider |133,Sprint|134");
        cars.put("Alpina", "-1,B10|142,B12|143,B3|144,B5|145,B6|146,B7|147,B8|148,D 10|149,Roadster S|173");
        cars.put("Austin Rover", "-1,Estate|174,Maestro|175,Metro|176,MK|177,Montego|178");
        cars.put(
                "Aston Martin",
                "-1,AR1|179,DB|182,DB7|183,DB9|184,V8|185,V12 Vanquish |186,Lagonda|187,Vantage|188,Virage|189,Volante|191,Vanquish|192");
        cars.put(
                "BMW",
                "-1,116|100,118|105,120|110,130|115,316|220,318|221,320|223,323|279,325|315,328|398,330|552,518|230,520|231,523|232,524|233,525|234,528|235,530|236,535|237,540|238,545|239,628|240,630|241,633|242,635|243,645|244,725|250,728|251,730|252,732|253,735|254,740|255,745|256,750|257,760|258,840|259,850|260,M1|261,M3|262,M5|263,M6|264,X3|265,X5|266,Z1|267,Z3|268,Z4|269,Z5|270,Z8|271,2002|272");
        cars.put(
                "Buick",
                "-1,Century |298,Electra|299,Park Avenue|300,Regal|301,Riviera|302,Roadmaster|303,Rainer|310,Rendezvous|320,Terraza|330,Le Sabre|340,LaCrosse|350,Skylark|351");
        cars.put("Bentley",
                "-1,Arnage|192,Azure|193,Brooklands|194,Continental|195,Eight|196,Mulsanne|197,Turbo R|198,Turbo RT|199,Turbo S|201");
        cars.put("Bugatti", "-1,EB 110|202");
        cars.put(
                "Cadillac",
                "-1,Allante|369,BLS|370,CTS|371,Deville|372,Eldorado|373,Escalade|374,Fleetwood|375,Seville|376,STS|380,SRX|390,Escalade EXT|400,XLR|410,CTS-V|430");
        cars.put(
                "Chevrolet",
                "-1,Astro|450,Alero|451,Avalanche|460,Aveo|470,Blazer|480,Beretta|481,2500|482,C1500|483,Camaro|484,Caprice|485,Celebrity|486,Chevy Van|487,Citation|488,Corsica|489,Cavalier|490,Crew Cab|491,Cobalt|500,Colorado|510,Corvette|520,Dixie Van|521,El Camino|522,Evanda|523,Equinox|530,Express|590,G|591,Impala|600,K1500|601,K30|602,Kalos|603,Lacetti|604,Lumina|605,Matiz|606,Malibu|610,Monte Carlo|620,Nubira|621,Rezzo|622,S-10|623,Silverado|630,SSR|640,Suburban|650,Tacuma|651,T-Blazer|652,Trans Sport|653,Tahoe|660,Trailblazer|670,Uplander|680,Venture|690");
        cars.put(
                "Chrysler",
                "-1,300 M|700,300C|701,Crossfire|702,Daytona|703,ES|704,Grand Voyager|705,GS|706,GTS|707,Le Baron|708,Neon|709,New Yorker|710,Pacifica|720,PT Cruiser|730,Saratoga|731,Sebring|740,Stratus|741,Valiant|742,Viper|743,Vision|744,Voyager|745");
        cars.put(
                "Citroen",
                "-1,2 CV 6|212,Acadiane|213,AX|214,Berlingo|215,BX|216,C1|217,C15|218,C2|219,C25|227,C3|228,C4|229,C5|275,C6|276,C8|277,CX|278,DS|280,Evasion|317,GSA|318,Jumper|319,Jumpy|321,LNA|358,SAXO|359,SM|360,Visa|361,Xantia|362,XM|363,Xsara|364,Xsara Picasso|365,ZX|366");
        cars.put(
                "Daewoo",
                "-1,Aranos|203,Espero|204,Evanda|205,Kalos|206,Korando|207,Lacetti|208,Lanos|209,Leganza|210,Matiz|211,Musso|381,Nexia|382,Nubira|383,Rezzo|384,Tacuma|385,Truck Plus|386");
        cars.put(
                "Dodge",
                "-1,Caravan|760,Charger|761,Dakota|770,Durango|780,Grand Caravan|790,Magnum|800,Neon|810,Ram 1500|820,Ram 2500|830,Ram 3500|840,Sprinter 2500|850,Sprinter 3500|860,SRT-4|870,Stratus|880,Van|881,Viper|882");
        cars.put("Dacia", "-1,Berlina|322,Break|323,Double Cab|324,Drop Side|325,Logan|326,Pick Up|327,Solenza|328");
        cars.put(
                "Daihatsu",
                "-1,Applause|329,Charade|331,Charmant|332,Copen|333,Coure|334,Domino|335,Feroza|336,Freeclimber|337,Gran Move|338,Hijet|339,Move|341,Rocky|342,Sirion|343,Taft|344,Terios|345,Valera|346,YRV|347");
        cars.put("De Tomaso", "-1,Guara|348,Pantera|349");
        cars.put(
                "Ford",
                "-1,Five Hundred|1000,Focus|1010,Focus C-Max|1011,Freestar|1020,Freestyle|1030,Fusion|1031,Galaxy|1032,Granada|1033,Ka|1034,M|1035,Maverick|1036,Mercury|1037,Mondeo|1038,Mustang|1040,Orion|1041,Probe|1042,Puma|1043,Ranger|1050,Scorpio|1051,Sierra|1052,Streetka|1053,Taunus|1054,Taurus|1060,Thunderbird|1070,Tourneo|1071,Transit|1072,Windstar|1073,Aerostar|368,Bronco|379,Capri|389,Cougar|402,Courier|403,Crown Victoria|890,E-150|900,E-350|910,Econovan|918,Econoline|919,Escape|920,Escort|921,Excursion|930,Expedition|940,Explorer|950,Express|951,Explorer Sport Trac|960,F-150|970,F-250|980,F-350|990,Fiesta|991");
        cars.put(
                "Ferrari",
                "-1,195|404,206|405,208|406,246|407,250|408,275|409,288|411,308|412,328|413,330|414,348|415,355|416,360|417,365|418,400|419,412|421,456|422,512|423,550|424,575|425,612|426,750|427,Daytona|428,Dino GT4|429,Enzo Ferrari|452,F355|453,F360|454,F40|455,F430|456,F50|457,F512|458,F550|459,Mondial|461,Superamerica|462,Testarossa|463");
        cars.put(
                "Fiat",
                "-1,124 Coupe|464,124 Spider|465,126|466,127|467,130|468,131|469,242|471,500|472,Barchetta|473,Brava|474,Bravo|475,Campagnola|476,Cinquecento|477,Coupe|478,Croma|479,Dino|496,Doblo|497,Ducato|498,Duna|499,Fiorino|501,Idea|502,Marea|503,Marengo|504,Maxi|505,Multipla|506,Palio|507,Panda|508,Penny|509,Punto|511,Regata|512,Ritmo|513,Scudo|514,Seicento|515,Spider Europa|516,Stilo|517,Strada|518,Talento|519,Tempra|524,Tipo|525,Ulysse|526,Uno|527,X 1/9|528");
        cars.put(
                "GMC",
                "-1,Canyon|1080,Envoy|1090,Envoy XL|1100,Envoy XUV|1110,Safari|1120,Syclone|1121,Savana|1130,Sierra|1140,Vandura|1141,Yukon|1150,Yukon XL 1500|1160,Yukon XL 2500|1170");
        cars.put(
                "Honda",
                "-1,Accord|1180,Civic|1190,Concerto|1191,CR-V|1200,CRX|1201,Element|1210,FR-V|1211,HR-V|1212,Insight|1220,Integra|1221,Jazz|1222,Ledend|1223,Logo|1224,NSX|1225,Odyssey|1230,Pilot|1240,Prelude|1241,Ridgeline|1250,S2000|1260,Shuttle|1261,Stream|1262");
        cars.put(
                "Hyundai",
                "-1,Accent|1270,Atos|1271,Coupe|1272,Elantra|1280,Excel|1281,Galloper|1282,Getz|1283,Grandeur|1284,H 100|1285,H 200|1286,H 350|1287,H-1|1288,H-1 Starex|1289,Highway|1291,Lantra|1292,Matrix|1293,Pony|1294,Santa Fe|1295,Santamo|1296,Satellite|1297,S-Coupe|1298,Sonica|1299,Sonata|1300,Terracan|1301,Trajet|1302,Tiburon|1310,Tucson|1320,XG 30|1321,XG 350|1330");
        cars.put("Hummer", "-1,Hummer|654");
        cars.put("Infiniti", "-1,FX35|1340,FX45|1350,G35|1360,I35|1361,M35|1370,M45|1380,Q45|1390,QX56|1400");
        cars.put("Isuzu",
                "-1,Ascender|655,Campo|656,DLX|657,Gemini|658,Midi|659,NKR|661,NPR|662,PICK UP|663,Trooper|664,WFR|665");
        cars.put("Innocenti", "-1,Clip|666,Elba|667,Small|668");
        cars.put("Jagaur",
                "-1,Sovereign|1419,S-Type|1420,X-Type|1430,XJ-Series|1440,XK-Series|1450,Daimler|671,D-Type|672,E|673,MK 2|674");
        cars.put(
                "Jeep",
                "-1,Cherokee|1451,CJ-5|1452,CJ-7|1453,CJ-8|1454,Comanche|1455,Grand Cherokee|1460,Renegade|1461,Liberty|1470,Wrangler|1480,Wagoneer|1481,Willy|1482");
        cars.put(
                "Kia",
                "-1,Amanti|1490,Besta|1491,Carens|1492,Carnival|1493,Cerato|1494,Clarus|1495,Elan|1496,Joice|1497,K2500|1498,K2700|1499,Leo|1500,Magentis|1501,Mentor|1502,Opirus|1503,Picanto|1504,Pregio|1505,Pride|1506,Retona|1507,Roadster|1508,Rocsta|1509,Rio|1510,Sephia|1511,Shuma|1512,Sedona|1520,Sorento|1530,Spectra|1540,Spectra5|1550,Sportage|1560");
        cars.put("Lada",
                "-1,110|420,111|431,112|432,1200|433,2107|434,Aleko|435,Forma|436,Niva|437,Nova|438,Samara|439");
        cars.put("Land  Rover", "-1,Defender|1568,Discovery|1569,Freelander|1570,LR3|1580,Range Rover|1590");
        cars.put(
                "Lancia",
                "-1,Beta|1421,Dedra|1422,Delta|1423,Flaminia|1424,Fulvia|1425,Gamma|1426,K|1427,Kappa|1428,Lybra|1429,MUSA|1431,Phedra|1432,Prisma|1433,Stratos|1434,Thema|1435,Thesis|1436,Y|1437,Ypsilon|1438,Z|1439,ZETA|1441");
        cars.put("Ligier", "-1,162|1442,Ambra|1443,Be-Up|1444,Nova|1445,Optima|1446,Prima|1447");
        cars.put(
                "Lotus",
                "-1,340 R|1449,Cortina|1456,Elan|1457,Elise|1458,Elite|1459,Esprit|1463,Europa|1464,Excel|1465,Exige|1466,Omega|1467,Super Seven|1468,V8|1469,Venturi|1471");
        cars.put("Lexus",
                "-1,ES330|1600,GS300|1610,GS430|1620,GX470|1630,IS300|1640,LS430|1650,LX470|1660,RX330|1670,SC430|1680");
        cars.put("Lincoln", "-1,Aviator|1690,LS|1700,Navigator|1710,Town Car|1720");
        cars.put("Lamborghini",
                "-1,LM|440,Countach|441,Diablo|442,Espada|443,Gallardo|444,Jalpa|445,Miura|447,Murcielago|448,Urraco P250|449");
        cars.put(
                "Mazda",
                "-1,121|1730,2|1731,3|1732,323|1733,5|1734,6|1735,626|1736,929|1737,B 2500|1738,Demio|1739,E|1740,MPV|1741,MX.-3|1742,MX-5|1743,MX-6|1744,Premacy|1745,RX-6|1746,RX-7|1747,RX-8|1748,Tribute|1749,Xedos|1750,MAZDA3|1760,MAZDA6|1770,MAZDASPEED Miata MX-5|1780,Miata MX-5|1790");
        cars.put(
                "Mercedes-Benz",
                "-1,All|1829,A 140|1830,A 150|1831,A 160|1832,A 170|1833,A 180|1834,A 190|1835,A 200|1836,A 210|1837,Actros|1838,Atego|1839,B 150|1840,B 170|1841,B 180|1842,B 200|1843,C 160|1844,C 180|1845,C 200|1846,C 220|1847,C 230|1848,C 240|1849,C 250|1850,C 270|1851,C 280|1852,C 30 AMG|1853,C 32 AMG|1854,C 320|1855,C 350|1856,C 36 AMG|1857,C 43 AMG|1858,C 55 AMG|1859,CE 200|1860,CE 300|1861,CL|1862,CL 180|1863,CL 200|1864,CL 220|1865,CL 230|1866,CL 420|1867,CL 500|1868,CL 55 AMG|1869,CL 600|1870,CL 65 AMG|1871,CLK|1872,CLK 55 AMG|1873,CLS|1874,E 200|1875,E 220|1876,E 230|1877,E 240|1878,E 250|1879,E 260|1880,E 270|1881,E 280|1882,E 290|1883,E 300|1884,E 320|1885,E 350|1886,E 36 AMG|1887,E 400|1888,E420|1889,E 430|1890,E 50|1891,E 500|1892,E55|1893,E 60 AMG|1894,G|1895,G 55 AMG|1896,LKW/TRUCKS|1897,MB 100|1898,ML 230|1899,ML 270|1900,ML 280|1901,ML 320|1902,ML 350|1903,ML 400|1904,ML 430|1905,ML 500|1906,ML 55 AMG|1907,R 320|1908,R 350|1909,R 500|1910,S 280|1911,S 300|1912,S 320|1913,S 350|1914,S 420|1916,S 430|1917,|1918,S 55|1919,S 560|1920,S 600|1921,S 65 AMG|1922,SL 280|1923,SL 300|1924,SL 320|1925,SL 350|1926,SL 380|1927,SL 420|1928,SL 450|1929,SL 500|1930,SL 55 AMG|1931,SL 560|1932,SL 600|1933,SL 65 AMG|1934,SLK|1935,SLK 200|1936,SLK 230|1937,SLK 280|1938,SLK 32 AMG|1939,SLK 320|1940,SLK 350|1941,SLK 55 AMG|1942,SLR|1943,Sprinter|1944,V|1945,V 200|1946,V 220|1947,V 230|1948,V 280|1949,Vaneo|1950,Vario|1951,Viano|1952,200|1955,230|1956,240|1957,250|1958,260|1959,270|1960,280|1961,300|1962,320|1963,350|1964,380|1965,400|1966,416|1967,420|1968,450|1969,500|1970,560|1971,600|1972,|2043,Vito|2044,190|2045,S 400|2046,S 500|2047,CLK 200|2050,CLK 230|2051,CLK 320|2052,CLK 430|2053");
        cars.put("Mercury",
                "-1,Grand Marquis|1973,Marauder|1974,Marquis|1975,Monterey|1976,Mountaineer|1977,Topaz|1978,Sable|1980");
        cars.put("Mini", "-1,1000|2061,1300|2062,Cooper|2063,Mini|2064,One|2065");
        cars.put(
                "Mitsubishi",
                "-1,3000 GT|3000,Eclipse Spyder|3010,Endeavor|3020,Montero |3021,400|3029,Galant|3030,Galloper|3031,Grandis|3032,Montero |3034,Canter|3038,Carisma|3039,Colt|3040,Cordia|3041,Cosmos|3042,L200|3043,L300|3044,L400|3045,Lancer Evolution |3046,Lancer|3047,Outlander|3048,Pajero|3051,Pajero Pinin|3052,PICK UP|3053,Santamo|3054,Sapporo|3055,Sigma|3056,Sigma Wagon|3057,Space Gear|3058,Space Runner|3059,Space Star|3060,Space Wagon|3061,Starion|3062,Tredia|3063");
        cars.put("Mahindra", "-1,CJ|1815,Jeep|1816");
        cars.put(
                "Maserati",
                "-1,222|1793,224|1794,228|1795,3200|1796,418|1797,420|1798,4200|1799,422|1800,424|1801,430|1802,Biturbo|1803,Coupe|1804,Ghibli|1805,Gransport|1806,Indy|1807,Karif|1808,MC12|1809,Merak|1810,Quattroporte|1811,Racing|1812,Shamal|1813,Spyder|1814");
        cars.put("Maybach", "-1,57|1791,62|1792");
        cars.put("MG", "-1,MGA|1981,MGB|1982,MGF|1983,TD|1984,TF|1985,ZR|1986,ZS|1987,ZT|1988");
        cars.put("Morgan", "-1,Aero 8|1989,Morgan|1991,Plus 4|1992,Plus 8|1993");
        cars.put(
                "Nissan",
                "-1,100|1994,200|1995,280 ZX|1996,300 ZX|1997,350Z|1998,Almera|1999,Almera Tino|2000,Armada|2001,Bluebird|2002,Cabstar|2003,Cargo|2004,Cherry|2005,Frontier|2006,Interstar|2007,King Cab|2008,Kubistar|2009,Laurel|2010,Maxima|2011,Micra|2012,Murano|2013,Navara|2014,Note|2015,Pathfinder|2016,Patrol|2017,Pick Up|2018,Prairie|2019,Primastar|2020,Primera|2021,Quest|2022,Serena|2024,Silvia|2025,Skyline|2026,Sunny|2027,Terrano|2028,Terrano 2|2029,Titan|2030,Trade|2031,Urvan|2032,Vanette|2033,X-Trail|2034,Altima|3090,Armada|3100,Frontier|3110,Maxima|3120,Micra|3121,Murano|3130,Pathfinder|3140,Quest|3150,Sentra|3160,Titan|3170,Xterra|3180");
        cars.put("Oldsmobile",
                "-1,Bravada|2035,Costom Cruiser|2036,Cutlass|2037,Delta 88|2038,Sillhouette|2039,Supreme|2040,Toronado|2041");
        cars.put(
                "Opel",
                "-1,Agila|245,Arena|246,Ascona|247,Astra|248,Calibra|249,Combo|281,Commodore|282,Corsa|283,Diplomat|284,Frontera|285,GT|286,Kadett|287,Manta|288,Meriva|289,Monterey|290,Monza|291,Movano|292,Omega|293,Pick Up Sportscap|294,Rekord|295,Senator|296,Signum|297,Sintra|304,Speedster|305,Tigra|306,Trans Sport|307,Vectra|308,Vivaro|309,Zafira|311,Campo|313");
        cars.put(
                "Oldtimer",
                "-1,Abarth|4000,AC|4001,Adler|4002,Alfa Romeo|4003,Allard|4004,Alvis|4005,AMC|4006,American|4007,Amphicar|4008,Andere - others|4009,Ariel|4010,Aries|4011,Armstrong Siddeley|4012,Arnolt|4013,ASA|4014,ASC|4015,Aston Martin|4016,Auburn|4017,Audi|4018,Aurora|4019,Austin|4020,Austin-Healey|4021,Auto Union|4022,Autobianchi|4023,Avanti|4024,Barkas|4025,Beast|4026,Belsize|4027,Benjamin|4028,Bentley|4029,Berkeley|4030,Bitter|4031,Bizzarrini|4032,BMW|4033,Borgward|4034,Bricklin|4035,Bugatti|4036,Buick|4037,Cadillac|4038,Chaika|4039,Champion|4040,Charron|4041,Checker|4042,Chenard & Walker|4043,Chevrolet|4044,Chrysler|4045,Cisitalia|4046,Citroen|4047,CJ Rayburn|4048,Clan|4049,Clenet|4050,Commer|4051,Continental|4052,Cord|4053,Cunningham|4054,D.F.P|4055,Daf|4056,Daimler|4057,Dante|4058,Datsun|4059,De Dion Bouton|4060,De lorean|4061,De Soto|4062,De Tomaso|4063,Delage|4064,Delahaye|4065,Denzel|4066,Deutz|4067,DKW|4068,Dodge|4069,Dort|4070,Duesenberg|4071,Durant|4072,Dutton|4073,Edsel|4074,Elva|4075,EMW|4076,England|4077,Enzmann|4078,Essex|4079,Excalibur|4080,Facel Vega|4081,Fairthorpe|4082,Falcon|4083,Fenton-Riley|4084,Ferrari|4085,Fiat|4086,Fire Vehicle|4087,Fleur de Lys|4088,FN|4089,Ford|4090,Fordson|4091,Formula-Car|4092,Franklin|4093,Frazer Nash|4094,Fuldamobil|4095,Gaz|4096,Ghia|4097,Gilbern|4098,Ginatta|4099,Ginetta|4100,Glas|4101,GMC|4102,Goliath|4104,Gordon Keeble|4105,Graham-Paige|4106,GSM|4107,Gutbrod|4108,Hanomag|4109,Harley Davidson|4110,Healey|4111,Heinkel|4112,Heritage|4113,Hillmann|4114,Hino|4115,Hispona-Suiza|4116,Holden|4117,Honda|4118,Horch|4119,Hotchkiss|4120,HRG|4121,Hudson|4122,Humber|4123,Hupmobile|4124,IFA|4125,IHC|4126,Innocenti|4127,International|4128,Iso Rivolta|4129,Isuzu|4130,Jaguar|4131,Jeep|4132,Jensen|4133,Kaiser|4134,Kaiser - Frazer|4135,Karman Ghia|4136,Karmann|4137,Kelly|4138,Kleinschnittger|4139,La Licorne|4140,Lagonda|4141,Lamborghini|4142,Lanchester|4143,Lancia|4144,Land Rover|4145,Lanz|4146,LaSalle|4147,Lea Francis|4148,Ligier|4149,Lincoln|4150,LKW-Trucks|4151,Lloyd|4152,LMX|4153,Lombardi|4154,Lorraine Dietrich|4155,Lotus|4156,Mack|4157,Magirus|4158,MAN|4159,Marauder|4160,March|4161,Marcos|4162,Marmon|4163,Maserati|4164,Mathis|4165,Matra|4166,Maybach|4167,Mazda|4168,Mercedes Benz|4169,Mercury|4170,Merlin|4171,Messerschmitt|4172,MG|4173,Military Vehicle|4174,Minerva|4175,Monica|4176,Monteverdi|4177,Moretti|4178,Morgan|4179,Morgan Darmont|4180,Morris Leon Bolle|4181,Morris Minor|4182,Moskvitch|4183,Motorrder-Bike|4184,Munga|4185,Muntz|4186,Nash|4187,Nissan|4188,NSU|4189,Ogle|4190,Oldsmobile|4191,Opel|4192,Osca|4193,Packard|4194,Panhard|4195,Panther|4196,Peerless|4197,Pegaso|4198,Peugeot|4199,Pierce Arrow|4200,Plymouth|4201,Pontiac|4202,Porsche|4203,Puma|4204,Rambler|4205,Reliant|4206,Renault|4207,RenT Bonnet|4208,Republic|4209,Riley|4210,Rolls Royce|4211,Rosengart|4212,Rotus|4213,Roush|4214,Rover|4215,Rovin|4216,Saab|4217,Salmson|4218,Saurer|4219,Seat|4220,Sebring|4221,Setra|4222,Shelby|4223,Shores|4224,Siata|4225,Simca|4226,Skoda|4227,Spartan|4228,Spitzer|4229,Stephens|4230,Steyer|4231,Studebaker|4232,Stutz|4233,Subaru|4234,Sunbeam|4235,Talbot|4236,Tatra|4237,Tempo|4238,Toyota|4239,Trabant|4240,Tractor|4241,Trident|4242,Triumph|4243,Tucker|4244,Turner|4245,TVR|4246,Uaz|4247,Unic|4248,Unimog|4249,Vanden Plas|4250,Veritas|4251,Vignale|4252,Vixen|4253,Voisin|4254,Volkswagen|4255,Volvo|4256,Wanderer|4257,Wartburg|4258,Westfalia|4259,Westfield|4260,Wetsch|4261,Willys|4262,Wolseley|4263,Yugo|4264,Zimmer|4265,Zndapp|4266");
        cars.put(
                "Peugeot",
                "-1,1007|3024,104|3025,106|3026,107|3027,204|3028,205|3035,206|3036,304|3037,307|3049,309|3050,305|3065,306|3066,404|3067,405|3069,406|3070,407|3071,504|3072,505|3073,604|3074,605|3075,607|3076,806|3077,807|3078,Boxer|3079,Camper|3080,Expert|3081,J5|3082,Partner|3083");
        cars.put(
                "Pontiac",
                "-1,6000|3189,Aztek|3190,Bonneville|3200,Fiero|3201,Firebird|3202,G6|3210,Grand AM|3220,Grand Prix|3230,GTO|3240,Montana|3250,Solstice Roadster|3258,Sunbird|3259,Sunfire|3260,Targa|3261,Trans Am|3262,Trans Sport|3263,Vibe|3270");
        cars.put(
                "Porsche",
                "-1,356|3279,911|3280,911 (993)|3281,911 (964)|3282,911 (996)|3283,911 (997)|3284,912|3285,912|3286,914|3287,924|3288,928|3289,944|3290,959|3291,962|3292,968|3293,Boxster|3295,Carrera|3296,Cayenne|3297,Cayman|3300");
        cars.put("Piaggio", "-1,Porter|3093,Porter|3301");
        cars.put("Plymouth", "-1,Grand Caravan|3302,Prowler|3303");
        cars.put("Proton", "-1,313|3304,315|3305,316|3306,318|3307,413|3308,415|3309,416|3310,418|3311,420|3312");
        cars.put(
                "Renault",
                "-1,Alpine A310|3313,Alpine A610|3314,Alpine V6|3315,Avantime|3316,Clio|3317,Coupe|3318,Espace|3319,Express|3320,Fuego|3321,Grand Espace|3322,Grand  Scenic|3323,Kangoo|3324,Laguna|3325,Mascott|3326,Master|3327,Megane|3328,Modus|3329,P 1400|3330,R 11|3331,R 14|3332,R 18|3333,R 19|3334,R 20|3335,R 21|3336,R 25|3337,R 30|3338,R 4|3339,R 5|3341,R 6|3342,R 9|3343,Rapid|3344,Safrane|3345,Scenic|3346,Spider|3347,Super 5|3348,trafic|3352,Twingo|3353,Vel Satis|3354");
        cars.put(
                "Rolls  Royce",
                "-1,Cloud|3355,Corniche|3356,Flying Spur|3357,Park Ward Turbo|3358,Phantom|3359,Silver Dawn|3361,Silver Seraph|3362,Silver Shadow|3363,Silver Spirit|3364,Silver Spur|3365,Touring|3366");
        cars.put(
                "Rover",
                "-1,100|3367,111|4267,114|4268,200|4269,213|4270,214|4271,216|4272,220|4273,25|4274,400|4275,414|4276,416|4277,418|4278,420|4279,45|4280,600|4281,618|4282,620|4283,623|4284,75|4285,800|4286,820|4287,825|4288,827|4289,Concerto|4290,Estate|4291,Metro|4292,Montego|4293,Rover|4294,SD|4295,Streetwise|4296,Tourer|4297");
        cars.put("Saab", "-1,90|3349,900|3351,9-3|3368,9-5|3369,9-7X|3371,99|3372,9000|3373,96|3376");
        cars.put(
                "Seat",
                "-1,Altea|3374,Arosa|3375,Fura|3377,Ibiza|3378,Alhanbra|3379,Terra|3381,Cordoba|3382,Marbella|3383,Panda|3384,Inca|3385,Leon|3386,Toledo|3387,Malaga|3388,Ronda|3391");
        cars.put(
                "Skoda",
                "-1,105|3396,120|3397,130|3398,135|3399,Fabia|3401,Favorit|3402,Felicia|3403,Forman|3404,Octavia|3405,Pick- up|3406,Superb|3407");
        cars.put("Smart", "-1,Crossblade|3408,ForFour|3409,ForTwo|3411,Roadster|3412,Smart|3413");
        cars.put("Satum", "-1,ION|3340,ION Quad Coupe|3350,L-Series|3360,Relay|3370,VUE|3380");
        cars.put("Scion", "-1,TC|3390,xA|3400,xB|3410");
        cars.put(
                "Subaru",
                "-1,Baja|3420,1200|3421,1800|3422,B9 Tribeca|3423,Baja|3424,E10|3425,Justy|3426,Libero|3427,Mini|3428,SVX|3429,Forester|3430,Vivio|3431,XT|3432,Impreza|3440,Legacy|3450,Outback|3460");
        cars.put("Ssang Yong", "-1,Family|3414,Korando|3415,Kyron|3416,Musso|3417,Rexton|3418,Rodius|3419");
        cars.put("Santana", "-1,PS-10|3443");
        cars.put(
                "Suzuki",
                "-1,Aerio|3470,Alto|3471,Baleno|3472,Cappuccino|3473,Carry|3474,Ignis|3475,Jimny|3476,Liana|3477,LJ 80|3478,Maruti|3479,Forenza|3480,SA 310|3481,Samurai|3482,Santana|3483,SJ 410|3484,SJ 413|3485,SJ Samurai|3486,Super-Carry|3487,Swift|3488,Vitara|3489,Forenza Wagon|3490,Wagon R+|3491,X-90|3492,Grand Vitara|3500,Reno|3510,Verona|3520,XL-7|3530");
        cars.put(
                "Toyota",
                "-1,4Runner|3540,Avalon|3550,Avensis|3551,Aygo|3552,Corolla|3559,Camry|3560,Camry Solara|3570,Celica|3580,Carina|3581,Cressida|3582,Crown|3583,Dyna|3584,F|3585,Fun Cruiser|3586,HDJ|3587,Hiace|3588,Hilux|3589,LC|3590,KJ|3591,Lite-Ace|3592,Paseo|3593,Pick- up|3594,Picnic|3595,Previa|3596,Prius|3597,ECHO|3600,Highlander|3610,Land Cruiser|3620,Matrix|3630,MR2 Spyder|3640,T-Bar GTI|3650,RAV4|3660,Sequoia|3670,Sienna|3680,Solara|3681,Starlet|3682,Supra|3683,Tercel|3684,Tacoma|3690,Tundra|3700,Yaris|3701,Auris|3702");
        cars.put("Talbot", "-1,Horizon|3531,Samba|3532,Solara|3533");
        cars.put("Trabant", "-1,Trabant|3534");
        cars.put("Triumph",
                "-1,Dolomite|3702,Moss|3703,Spitfire|3704,TR3|3705,TR4|3706,TR5|3707,TR6|3723,TR7|3724,TR8|3725");
        cars.put("TVR",
                "-1,Cerbera|1817,Chimaera|1818,Griffith|1819,S 2|1820,S4C|1821,Sargaris|1822,T350|1823,Tuscan|1824,V8S|1825");
        cars.put(
                "Volkswagen",
                "-1,Anfibio|3708,Allstar|3709,Beetle|3710,Blue Star|3711,Bora|3712,Buggy|3713,Bus|3714,Caddy|3715,California|3716,Caravelle|3717,Corrado|3718,Fox|3719,Golf|3720,GTI|3730,Iltis|3731,Jetta|3740,Kafer|3741,Karmann Ghia|3742,L80|3743,181|3744,LT|3745,Lupo|3746,Maggiolino|3747,Multivan|3748,New  Beetle|3749,Passat|3750,Phaeton|3760,Polo|3761,Santana|3762,Scirocco|3763,Sharan|3764,T2|3765,T3|3766,T4|3767,T5|3768,Taro|3769,Touareg|3770,Touran|3771,Transporter|3772,Vento|3773,White Star|3774");
        cars.put(
                "Volvo",
                "-1,S40|3780,740|3781,850|3782,940|3783,960|3784,S60|3790,S80|3800,V40|3805,V50|3810,V70|3820,XC70|3830,XC90|3840,240|3841,244|3842");
        cars.put("Vauxhall", "-1,Vauxhall|1826");
        cars.put("Wartburg", "-1,Wartburg|1827");
        cars.put("Wiesmann", "-1,MF 28|1828,MF 3|2060,MF 30|2083");

        Enumeration<Object> keys = cars.keys();

        StringBuffer buf = new StringBuffer();

        while (keys.hasMoreElements()) {
            String key = (String) keys.nextElement();
            String values = cars.getProperty(key);

            String[] sModels = values.split("\\|");

            String tmp;

            for (String s : sModels) {
                String[] tokens = s.split(",");
                if (tokens.length < 2) {
                    continue;
                }
                tmp = Queries.getQ("Q.ModelsInsert", tokens[1], key);
                buf.append(tmp).append("\n");
            }
        }
        System.out.println(buf.toString());
    }
}
