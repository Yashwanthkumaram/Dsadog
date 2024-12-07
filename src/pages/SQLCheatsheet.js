import React from 'react';
import './sqlcheatsheet.css';  // Create a CSS file for custom styling
import CodeSnippet from '../components/CodeSnippet';

const SQLCheatSheet = () => {
  const sqlBasics = `
-- Create a Table
CREATE TABLE Students (
  ID INT PRIMARY KEY,
  Name VARCHAR(100),
  Age INT,
  Major VARCHAR(100)
);

-- Insert Data
INSERT INTO Students (ID, Name, Age, Major) 
VALUES (1, 'John Doe', 20, 'Computer Science');

-- Select Data
SELECT * FROM Students;

-- Update Data
UPDATE Students 
SET Age = 21 
WHERE ID = 1;

-- Delete Data
DELETE FROM Students WHERE ID = 1;
`;

  const advancedSQL = `
-- Join Example
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

-- Aggregate Function
SELECT AVG(Salary) AS AverageSalary
FROM Employees;

-- Subquery
SELECT Name 
FROM Employees 
WHERE Salary > (SELECT AVG(Salary) FROM Employees);

-- Create Index
CREATE INDEX idx_lastname
ON Employees (LastName);
`;

  return (
    <div className="container">
      <header className="header">
        <h1>SQL Cheat Sheet</h1>
        <p className="author">Yashwanth Kumar A M, Dec 7, 2024</p>
      </header>

      <section className="introduction">
        <h2>Introduction to SQL</h2>
        <p>
          SQL (Structured Query Language) is a standard language for managing and manipulating databases.
          This cheat sheet covers essential SQL queries and concepts for quick reference.
        </p>
      </section>

      <section className="sql-section">
        <h2>SQL Basics</h2>
        <CodeSnippet language="sql" code={sqlBasics} />
      </section>

      <section className="sql-section">
        <h2>Advanced SQL Queries</h2>
        <CodeSnippet language="sql" code={advancedSQL} />
      </section>

      <section>
        <h2>Recommended SQL Practice Problems</h2>
        <h2><a href="https://www.hackerrank.com/domains/sql">HackerRank SQL Practice</a></h2>
        <h2><a href="https://leetcode.com/problemset/database/">LeetCode SQL Problems</a></h2>
      </section>
    </div>
  );
};

export default SQLCheatSheet;
