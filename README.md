# CLI Employee Management System

A command-line interface (CLI) application for managing employee records using Node.js. This project demonstrates core programming concepts including arrays, CRUD operations, and interactive CLI development.

## Features

- **Add Employee**: Create new employee records with details (ID, Name, Email, Department, Salary)
- **View All Employees**: Display all employee records in a formatted table
- **Search Employee**: Find employees by ID or name
- **Update Employee**: Modify existing employee information
- **Delete Employee**: Remove employee records
- **Save to File**: Persist employee data to a JSON file
- **Load from File**: Restore employee data from saved file
- **Interactive Menu**: User-friendly command-line interface

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RajAstha1/cli-employee-management.git
   cd cli-employee-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the application:
```bash
node index.js
```

Or use npm script:
```bash
npm start
```

Follow the on-screen menu to manage employee records.

## Project Structure

```
cli-employee-management/
├── index.js              # Main application entry point
├── employees.json        # Employee data storage
├── package.json          # Project configuration
└── README.md             # This file
```

## Technology Stack

- **Language**: JavaScript (ES6+)
- **Runtime**: Node.js
- **Data Storage**: JSON file format
- **Data Structure**: Arrays for employee records
