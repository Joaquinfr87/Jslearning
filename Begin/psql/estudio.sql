--Ejercicio
/*select current_date from empleado;

select extract(day from fecha_contratacion) as dia,
extract(year from fecha_contratacion) as año,
extract(month from fecha_contratacion) as mes
from empleado;

select distinct nombre from empleado;

select distinct nombre, apellido from empleado order by nombre, apellido;

select distinct rental_rate from film order by rental_rate;*/

/*select * from empleado where extract(year from fecha_contratacion)=2008;
select trunc((date '2100-08-20' - current_date)/365.25) as "dias trabajados";*/
--WHERE
/*
select first_name, last_name from customer where first_name = 'Jamie';

select first_name, last_name from customer where first_name = 'Jamie' and last_name = 'Rice';

select first_name, last_name from customer where first_name = 'Adam' or last_name='Rodriguez';

select first_name, last_name from customer where first_name in ('Ann','Anne','Annie');

select first_name, last_name from customer;*/

--AND OPERATORS
select 1=1 as result;
select true and null as result;--=>null
select false and null as result;--=>false

select title, length,rental_rate from film 
where length >180
and rental_rate<1;

select true or null as result;--=>true
select false or null as result;--=>null

select title,rental_rate from film
where rental_rate = 0.99 or 
rental_rate = 2.99;

--LIMIT
select film_id, title,release_year
from film
order by film_id
limit 5;

select film_id, title, release_year from film
order by film_id
limit 4 offset 5;--ofset rate indicas donde inicia

--FETCH
select film_id,title from film
order by title
fetch first row only;

select film_id,title from film
order by title
offset 5 rows
fetch first 5 row only;

--IN
--El in es como un or multiple
select film_id, title from film where film_id in (1,2,3);

select first_name, last_name from actor where last_name in ('Allen','Chase','Davis')
order by last_name;

select payment_id,amount,payment_date from payment
where payment_date::date in ('2007-02-15','2007-02-16');
-- :: cast operator sirve para forzar la conversion el tipo de valor

select film_id,title from film where film_id not in (3,4,7) order by film_id;--excluye los asignados

--between
select payment_id, amount from payment where payment_id between 17000 and 17505
order by payment_id;

select payment_id, amount from payment where payment_id not between 17000 and 17505
order by payment_id;
--LIKE
select first_name,last_name from customer where first_name like 'Jen%';

select first_name, last_name from customer where first_name like '%er%';

select first_name ,last_name from customer where first_name like '_her%';

select first_name , last_name from customer where first_name ilike 'a%';

select first_name from customer where first_name ~~ 'Ba%';

--NULL
select address, address2 from address where address2 is null;

select address, address2 from address where address2 is not null;

--JOIN
select a, fruit_a,b , fruit_b from basket_a inner join basket_b on fruit_a=fruit_b;
--INNER JOIN
select c.customer_id,c.first_name,c.last_name,p.amount,p.payment_date from customer c
join payment p on p.customer_id = c.customer_id order by p.payment_date;

select c.customer_id, c.first_name || ' ' || c.last_name customer_name, 
s.first_name || ' ' || s.last_name staff_name,
p.amount,
p.payment_date
from customer c
join payment p using (customer_id)
join staff s using (staff_id)
order by payment_date;

--LEFT JOIN
select f.film_id,f.title,i.inventory_id from film f left join inventory i on i.film_id=f.film_id
order by f.title;

select f.film_id, f.title, i.inventory_id from film f left join inventory i using(film_id)
where i.film_id is null order by f.title;

--RIGHT JOIN

--SELF JOIN
select j.nombre || ' '|| j.apellido,  count(e.id_jefe) from empleado j 
join empleado e on j.id_empleado = e.id_jefe
group by j.nombre || ' '|| j.apellido;

select e.nombre || ' ' || e. apellido || ' ' || e.salario empleado,
c.nombre cargo, d.nombre departamento, 
j.nombre || ' ' || j. apellido || ' ' || j.salario jefe,
c2.nombre "cargo jefe",d2.nombre "departamento jefe"
from empleado e 
join empleado j on e.id_jefe = j.id_empleado
join cargo c on c.id_cargo = e.id_cargo
join departamento d on d.id_departamento = e.id_departamento
join ubicacion u on d.id_ubicacion = u.id_ubicacion
join cargo c2 on c2.id_cargo = j.id_cargo
join departamento d2 on d2.id_departamento = j.id_departamento
where u.ciudad = 'La Paz'
order by e.salario desc;

