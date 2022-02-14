// import MySQL2 module
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: process.env.DB_USER,
      // Your MySQL password
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    },
);

db.connect((err) => {if(err){return err}else{console.log('Connected to the database.')}});

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
                    viewEmployees();
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
    
//initialize();

module.exports = db;