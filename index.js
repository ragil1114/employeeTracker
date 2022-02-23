// import MySQL2 module
const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db');

initialize();

function initialize() {
    console.log('Welcome to the Employee Tracker!');
    showOptions();
}

function showOptions() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'What would you like to do?',
                choices: [
                    'View all employees',
                    'View all departments',
                    'View all roles',
                    'Add an employee',
                    'Add a department',
                    'Add a role'
                ]
            }
        ])
        .then(function (answer) {
            switch (answer.option) {
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
            }
        });
}

function viewAllEmployees() {
    db.findAllEmployees()
        .then(function (employees) {
            console.log('employees:', employees);
        })
        .then(()=> showOptions())
}