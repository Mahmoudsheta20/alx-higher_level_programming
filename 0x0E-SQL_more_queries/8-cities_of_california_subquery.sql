-- Write a script that lists all the cities of California that can be found in the database hbtn_0d_us
SELECT cities.id, cities.name FROM cities INNER JOIN states ON cities.state_id = 1; 
