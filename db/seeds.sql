INSERT INTO departments (department_name)
VALUES
    ('Sales'),
    ('Software'),
    ('Accountant'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 170000, 2),
    ('Software Engineer', 150000, 2),
    ('Account Manager', 190000, 3),
    ('Accountant', 130000, 3),
    ('Legal Team Lead', 230000, 4),
    ('Lawyer', 200000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Bader', 'Munir', 3, null),
    ('John', 'Rambo', 1, 1),
    ('Jackie', 'Chan', 2, null),
    ('Kevin', 'Costner', 4, 1),
    ('Christian', 'Bale', 5, 2),
    ('Mike', 'Tyson', 6, null),
    ('Jawad', 'Bashir', 7, 3),
    ('Jim', 'Carry', 8, 3);