# Laravel Project Setup with Vue.js

This repository contains a Laravel project with Vue.js integration. Follow the instructions below to set up the project and get started.

## implementation of
There are two entities: employees and departments. Employees can be paid hourly or monthly. The calculation of wages for employees with hourly pay will have the following formula: number of hours * amount per hour. For employees with a rate, the calculation method returns the monthly rate. Implement the following functionality:

1. Importing employees into the database from an XML file (think the format yourself)
2. Selecting employees from the database (Design yourself)
3. Display a list of employees with the following information: full name, date of birth, department, position, type of employee (rate or hourly wage), salary per month (calculated according to the formula depending on the type of employee).
4. Implement the ability to display (10, 25, 50, 100) employees per page with the option to display the number of employees. (Default 10).
5. Add the possibility of pagination (pagination) for employees.
6. Add navigation by departments, navigation by department leads to the page for displaying employees of the selected department.
7. Implementation of the page to display 404 http status.

### Principle of URL formation:
Possible URL options for the CNC relative to the domain:
/employes - Display a list of employees
/employes?page=3 - third page of pagination of the list of employees
/employes/[department] - Displays a list of employees by department
/employes/[department]?page=3 - Displaying a list of employees by department third pagination page
Where [department] is the department ID
Data such as the number of output of employees per page can be put into a GET parameter.

### Execution conditions
What can be used: Laravel, MySql, javascript/Vue.js, html, css.
Task to execute on Laravel 8. PHP 7.4.

### What is expected
1. Cleanliness of the code and its readability.
2. Compliance with coding standards.
3. Reasonable application of OOP principles.
4. Using only standard Laravel tools.
5. Database design. (Normalization).
6. Valid HTML5.
7. An example of an XML file.

## Prerequisites

Before proceeding, make sure you have the following installed:

- PHP (>= 7.4)
- Composer
- Node.js (>= 12)
- npm (or yarn)

## Installation

1. Clone the repository to your local machine:
```bash
    git clone <repository-url>
```
2. Navigate to the project directory:
```bash
    cd <project-directory>
```
3. Install PHP dependencies using Composer:
```bash
    composer install
```
4. Install JavaScript dependencies using npm (or yarn):
```bash
    npm install
    # or
    yarn install
```
5. Create a copy of the .env.example file and rename it to .env:
```bash
    cp .env.example .env
```

6. Generate an application key:
```bash
    php artisan key:generate
```

7. To create the necessary database tables, run the migration command:
```bash
    php artisan migrate
```

7. If you want to populate the database with sample data, run the following command:
```bash
    php artisan db:seed
```
## Running the Application
To start the local development server, run the following command:
```bash
    php artisan serve
```
You can now access the application by visiting http://localhost:8000 in your web browser.

## Importing Employees
To import employee data from an XML file, run the following command:

```bash
    php artisan import:employees ExampleEmployeesXML.xml
```

## Routes
The following routes are available in this Laravel Vue project:

* `/` - Redirects to /employees
* `/employees` - Displays all employees
* `/employees?page=10` - Displays the 10th page of employees
* `/employees/:department` - Displays employees filtered by department
* `/employees/:department?page=10` - Displays the 10th page of employees filtered by department
* For all others - 404 page

## API Routes
The following routes are available in this Laravel project:

* GET `/employees` - Retrieve all employees, with optional filters:
    *  page - Page number for pagination
    *  perPage - Number of employees per page
    *  department - Filter employees by department
* POST `/employees` - Create a new employee
* GET `/employees/{id}` - Retrieve a specific employee
* PUT `/employees/{id}` - Update a specific employee
* DELETE `/employees/{id}` - Delete a specific employee
* GET `/departments` - Retrieve all departments

## Time spent on each module
* Project Setup: 10 minutes
* Database Migration and Seeding: 20 minutes
* Importing Employees: 30 minutes
* Implementing Routes: 15 minutes
* API Controllers: 1 hours 30 minutes
* Vue.js Integration: 2 hours
* Styling and UI: 20 hours
* Testing and Debugging: 30 minutes
* Documentation: 30 minutes

Total Time Spent: 6 hours

## Additional Information
For more information about Laravel and Vue.js, please refer to the official documentation:

* Laravel: https://laravel.com/docs
* Vue.js: https://vuejs.org/