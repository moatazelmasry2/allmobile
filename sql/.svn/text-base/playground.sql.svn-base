INSERT into cities (en,ar,countryID) SELECT 'Cairo', 'القاهره',countries.id FROM countries WHERE countries.en='Iraq';



select o.id, o.offer_uid, cats.en as category, brands.en as brand, models.name as model, oils.en as oil, 
o.manufacture_year, gears.en as gearType, 
colors.en as color, countries.en as country, stats.en as status, ofstats.name as offer_status, o.num_km, o.price, 
o.automatic_windshield, o.central_locks, o.leather_seats, o.airconditioner, o.navigator, o.power_steering, 
o.num_doors, o.num_seats, o.abs, o.fourx4, o.alarm, o.xenon, o.airbags, o.created, o.last_visited, 
o.hits, o.description 
from pkw_offers as o
left join pkw_categories cats on o.category_id=cats.id 
left join pkw_brands brands on o.brand_id=brands.id 
left join pkw_models models on o.model_id=models.id 
left join oil_types oils on o.oiltypes_id=oils.id 
left join gear_type gears on o.geartype_id=gears.id
left join colors colors on o.color_id=colors.id 
left join countries countries on o.country_id=countries.id 
left join status stats on o.status=stats.id 
left join _offer_status ofstats on o.offer_status=ofstats.id 
where o.id=5;


t2.en as brand from pkw_offers as t1 left join pkw_brands t2 on t1.brand_id=t2.id where t1.id=5;


category_id,brand_id,model_id, oiltypes_id,manufacture_year, geartype_id, color_id, country_id, city_id,status,
offer_status, num_km,price 





