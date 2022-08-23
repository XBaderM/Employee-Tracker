const inquirer = require('inquirer');

let connection;

console.log(`================`);
console.log(`Employee Tracker`);
console.log(`================`);

async function mainMenu() {
    connection = await require('./config/dbconnection');

    const res = await inquirer.prompt([{
        type: 'list',
        name: 'main',
        message: 'Please pick an option: ',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }]);

    switch (res.main) {
        case 'View all departments':
            await Departments();
            break;
        case 'View all roles':
            await Roles();
            break;
        case 'View all employees':
            await Employees();
            break;
        case 'Add a department':
            await addDepartment();
            break;
        case 'Add a role':
            await addRole();
            break;
        case 'Add an employee':
            await addEmployee();
            break;
        case 'Update an employee role':
            await updateEmployee();
            break;
    }
}

async function Departments() {
    const [getRows, fields] = await connection.execute('SELECT * FROM departments ORDER BY id');
    console.table(getRows);

    mainMenu();
}

async function Roles() {
    const [getRows, fields] = await connection.execute('SELECT * FROM roles');
    console.table(getRows);

    mainMenu();
}

async function Employees() {
    const [getRows, fields] = await connection.execute('SELECT * FROM employees');
    console.table(getRows);

    mainMenu();
}

mainMenu();