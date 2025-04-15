INSERT INTO Departments (departmentId, name, city)
    VALUES
	(1, 'Arte', 'Cádiz'),
	(2, 'Historia', NULL),
	(3, 'Informática', 'Sevilla');

INSERT INTO Employees (employeeId, email, password, departmentId, bossId, firstName, lastName, salary)
    VALUES
	(1, "perianez@company.com", "pbkdf2:sha256:150000$E0m6fWQ4$75d0c4b1ac12a29db992372fcb5310ab585d3ff78851c476751d0b8254dfc2ae", 1, NULL, 'Pedro', 'Periáñez', 2300),
	(2, "jimenez@company.com", "pbkdf2:sha256:150000$KrIt4AMI$11e887644fe162e8f5aadc20837380049c6dfed091e786fe5b4e9a5b1c2c6452", 1, 1, 'José', 'Jiménez', 2500),
	(3, "lacalle@company.com", "pbkdf2:sha256:150000$FpWM4gWv$aa48e4baf5c54d298f780c2e83a234d3e1c3c543b48444b6d45ff7e8527f82c7", 2, 2, 'Lola', 'Lacalle', 2300),
	(4, "linares@company.com", "pbkdf2:sha256:150000$Fx4Y8hCE$484b17e4ea7cf31c5dcd3b6cec3bd966337568631d6956b711c5cd495cdf7b0b", 3, 2, 'Luis', 'Linares', 1300),
	(5, "alvarez@company.com", "pbkdf2:sha256:150000$sQVVX0u6$f7298fa07aee1015297e0564b7883dc5823d06b0da74c52a8a754a1808ba5bc2", 1, 3, 'Ana', 'Álvarez', 1300);
-- The passwords are the email usernames (what goes before the @)
