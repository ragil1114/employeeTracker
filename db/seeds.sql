USE CMS_db;

INSERT INTO department (name)
VALUES
  ('Engineering'),
  ('Marketing'),
  ('Sales'),
  ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Manager', 15000, 1),
  ('Engineer', 10000, 1),
  ('Salesperson', 8000, 3),
  ('Marketing Manager', 12000, 2),
  ('Marketing Specialist', 7000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Jane', 'Smith', 1, NULL),
  ('John', 'Doe', 2, 1),
  ('Sally', 'Ride', 3, 1),
  ('Wang', 'Lee', 4, 2),
  ('James', 'Smith', 4, 2),
  ('Jim', 'Jones', 4, 2),
  ('Mike', 'Williams', 4, 2),
  ('John', 'Brown', 4, 2),
  ('Don', 'Davis', 4, 2),
  ('Mike', 'Miller', 4, 2);

