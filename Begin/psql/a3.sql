/*A3. Practica 2: SQL lenguaje de definicion de datos 
Joaquin Alessandro Felipez Rojas*/
--1
select * from country where population = 0;
--2
select name Nombre,governmentform "Forma de Gobierno" from country
where governmentform in('Republic','Federal Republic');
--3
select name 'Nombre',lifeexpectancy "Esperanza vida",region "Region" from country
where lifeexpectancy not between 50 and 75;
--4
select * from city where name ilike 'a%';
--5
select distinct language as Lenguaje from countrylanguage order by Lenguaje;
--6
select * from country where continent = 'Europe' and surfacearea < 100000;
--7
select name "Nombre", governmentform "Forma de Gobierno" from country
where governmentform = 'Islamic Republic';
--8
select name "Nombre",population "Poblacion" from country 
where population <> 0
order by population asc limit 10;
--9
select name "Nombre", surfacearea "Extension" from country order by surfacearea desc limit 15;
--10
select gnp "Producto Bruto Nacional",gnpold "Producto Bruto Nacional Anterior", abs(gnp-gnpold)
"Diferencia" from country where gnp > 15000 order by gnp desc ;
--11
select name "Nombre", population "Habitantes", surfacearea "Area", round(population/surfacearea,2) "Densidad"
from country where continent='Asia';
--12
select c.name from city c join country t on c.countrycode=t.code
where t.region = 'Western Africa'
order by c.name asc;
--13
select c.name, count(l.countrycode) "Cantidad" from country c join countrylanguage l on c.code = l.countrycode
group by c.name order by "Cantidad" desc;
--14
select c.name from city c join country t on c.countrycode = t.code join countrylanguage l on l.countrycode=t.code
where l.isofficial = 'T' and l.language='English';
--15
select name from city where population > (select population from country where name='Bolivia');
--16
select distinct c.name from countrylanguage l join country c on c.code = l.countrycode
where l.language in (select language from countrylanguage where countrycode = (select code from country where
name = 'Bolivia'));
--17
select continent,count(*) from country
group by continent
having count(*)>40;
--18
--repetido con el 13
select c.name, count(l.countrycode) "Cantidad" from country c join countrylanguage l on c.code = l.countrycode
group by c.name order by "Cantidad" desc;
--19
--repetido con el 14
select c.name from city c join country t on c.countrycode = t.code join countrylanguage l on l.countrycode=t.code
where l.isofficial = 'T' and l.language='English';
--20
select t.name "Nombre Pais", c.name "Capital" from country t join city c on c.countrycode = t.code where t.capital = c.id;
--1
select id, name from city where population > 5000000;
--2
select * from country where headofstate = 'Elisabeth II'; 
--3
select 	* from country where region != 'South America';
--4
select name, population from city where population between 3000000 and 5000000;
--5
select * from country where indepyear is null and continent = 'Oceania';
--6
select * from country where population is not null order by population asc limit 10;
--7
select * from city c join country t on t.code = c.countrycode  where(c.name ~~* 'a%' or c.name ~~* 'b%') 
and t.continent = 'Asia';
--8
select * from country where governmentform = (select governmentform from country where name='Bolivia');
--9
select * from city c join country t on t.code=c.countrycode join countrylanguage l on
l.countrycode = t.code
where l.language = 'Spanish' and l.isofficial = 'F' ; 
--10
select * from city c join country t on t.code = c.countrycode where t.region = 'Western Africa'
order by c.name;
--11
select count(*) from city;
--12
select c.name from countrylanguage l join country c on c.code = l.countrycode
group by c.name
having count(l.language)=1;
--13
select c.name from countrylanguage l join country c on c.code = l.countrycode
group by c.name
having count(l.language)=1;
--14
--repetido con el 7 
--15
select t.name, c.name, t.population , c.population , abs(t.population-c.population ) "Diferencia poblacional" from country t
join city c on t.code = c.countrycode
where (t.population <> 0 and t.population is not null) and 
(c.population <> 0 and c.population is not null);
