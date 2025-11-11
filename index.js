const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')();

const DATA_FILE = path.join(__dirname, 'employees.json');
let employees = [];

// Load employees from file
function loadEmployees() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      employees = JSON.parse(data);
    } else {
      employees = [];
    }
  } catch (err) {
    console.error('Error loading employees:', err);
    employees = [];
  }
}

// Save employees to file
function saveEmployees() {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(employees, null, 2));
    console.log('Employees saved successfully!\n');
  } catch (err) {
    console.error('Error saving employees:', err);
  }
}

// Display menu
function displayMenu() {
  console.clear();
  console.log('='.repeat(50));
  console.log('   CLI EMPLOYEE MANAGEMENT SYSTEM');
  console.log('='.repeat(50));
  console.log('1. Add Employee');
  console.log('2. View All Employees');
  console.log('3. Search Employee');
  console.log('4. Update Employee');
  console.log('5. Delete Employee');
  console.log('6. Save & Exit');
  console.log('='.repeat(50));
}

// Add new employee
function addEmployee() {
  console.log('\n--- Add New Employee ---');
  const id = prompt('Enter employee ID: ');
  const name = prompt('Enter employee name: ');
  const email = prompt('Enter employee email: ');
  const department = prompt('Enter department: ');
  const salary = prompt('Enter salary: ');

  const employee = {
    id,
    name,
    email,
    department,
    salary: parseFloat(salary)
  };

  employees.push(employee);
  console.log('Employee added successfully!\n');
}

// View all employees
function viewAllEmployees() {
  console.log('\n--- All Employees ---');
  if (employees.length === 0) {
    console.log('No employees found.\n');
    return;
  }

  console.log('\nID\tName\t\t\tEmail\t\t\tDept\t\tSalary');
  console.log('-'.repeat(100));
  employees.forEach(emp => {
    console.log(
      `${emp.id}\t${emp.name.substring(0, 15).padEnd(15, ' ')}\t${emp.email.substring(0, 20).padEnd(20, ' ')}\t${emp.department}\t\t${emp.salary}`
    );
  });
  console.log('');
}

// Search employee
function searchEmployee() {
  console.log('\n--- Search Employee ---');
  console.log('1. Search by ID');
  console.log('2. Search by Name');
  const choice = prompt('Enter your choice (1 or 2): ');

  let result = [];
  if (choice === '1') {
    const id = prompt('Enter employee ID: ');
    result = employees.filter(emp => emp.id === id);
  } else if (choice === '2') {
    const name = prompt('Enter employee name: ');
    result = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
  } else {
    console.log('Invalid choice!\n');
    return;
  }

  if (result.length === 0) {
    console.log('No employees found.\n');
  } else {
    console.log('\n--- Search Results ---');
    result.forEach(emp => {
      console.log(`ID: ${emp.id}, Name: ${emp.name}, Email: ${emp.email}, Dept: ${emp.department}, Salary: ${emp.salary}\n`);
    });
  }
}

// Update employee
function updateEmployee() {
  console.log('\n--- Update Employee ---');
  const id = prompt('Enter employee ID to update: ');
  const empIndex = employees.findIndex(emp => emp.id === id);

  if (empIndex === -1) {
    console.log('Employee not found!\n');
    return;
  }

  const emp = employees[empIndex];
  console.log(`\nCurrent Details: ${emp.name}, ${emp.email}, ${emp.department}, ${emp.salary}`);
  
  const name = prompt('Enter new name (or press enter to skip): ') || emp.name;
  const email = prompt('Enter new email (or press enter to skip): ') || emp.email;
  const department = prompt('Enter new department (or press enter to skip): ') || emp.department;
  const salary = prompt('Enter new salary (or press enter to skip): ') || emp.salary;

  employees[empIndex] = {
    id,
    name,
    email,
    department,
    salary: parseFloat(salary)
  };

  console.log('Employee updated successfully!\n');
}

// Delete employee
function deleteEmployee() {
  console.log('\n--- Delete Employee ---');
  const id = prompt('Enter employee ID to delete: ');
  const empIndex = employees.findIndex(emp => emp.id === id);

  if (empIndex === -1) {
    console.log('Employee not found!\n');
    return;
  }

  const deleted = employees.splice(empIndex, 1);
  console.log(`Employee "${deleted[0].name}" deleted successfully!\n`);
}

// Main program loop
function main() {
  loadEmployees();

  let running = true;
  while (running) {
    displayMenu();
    const choice = prompt('Enter your choice (1-6): ');

    switch (choice) {
      case '1':
        addEmployee();
        break;
      case '2':
        viewAllEmployees();
        break;
      case '3':
        searchEmployee();
        break;
      case '4':
        updateEmployee();
        break;
      case '5':
        deleteEmployee();
        break;
      case '6':
        saveEmployees();
        console.log('Thank you for using Employee Management System!');
        running = false;
        break;
      default:
        console.log('Invalid choice! Please try again.');
    }

    if (running) {
      prompt('Press enter to continue...');
    }
  }
}

// Start the application
main();
