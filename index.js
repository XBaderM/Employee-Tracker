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

mainMenu();