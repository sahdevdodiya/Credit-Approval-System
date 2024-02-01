# Credit-Approval-System
 Backend development of a Credit Approval System using Python/Django. APIs handle customer registration, loan eligibility, and loan processing, emphasizing data modeling, Dockerization, and background task implementation.
 Certainly! Here's a description for your project:

---

# Credit Approval System

The Credit Approval System is a robust backend application developed using Node.js, Express, and MongoDB. The primary objective of this project is to create a comprehensive credit approval system that assesses customer eligibility based on past data and handles future transactions seamlessly.

## 1. Setup and Initialization

### a) Setup

- **Backend Stack:** Node.js, Express
- **Database:** MongoDB
- **Dockerization:** The entire application, along with its dependencies, is Dockerized for easy deployment.
- **Data Models:** Appropriate data models are built to efficiently handle customer and loan-related information.
- **Database:** Utilizes MongoDB as the database for storing customer data and loan records.

### b) Initialization

- **Data Ingestion:** Background workers are employed to ingest data from provided Excel sheets ("customer_data.xlsx" and "loan_data.xlsx") into the system, ensuring a well-populated initial database.

## 2. API Endpoints

### /register

- Adds new customers to the system with an approved credit limit based on their salary. The credit limit calculation follows a relation of 36 times the monthly salary (rounded to the nearest lakh).

### /check-eligibility

- Evaluates loan eligibility based on a customer's credit score, considering factors such as past loans paid on time, the number of past loans, loan activity in the current year, and approved loan volume. The system dynamically approves loans based on varying conditions, ensuring a fair and data-driven approach.

### /create-loan

- Processes new loans based on eligibility criteria, allowing for efficient loan management.

### /view-loan/loan_id

- Provides detailed information about a specific loan, including customer details, loan amount, interest rate, monthly installment, and tenure.

### /view-loans/customer_id

- Offers a comprehensive view of all current loan details associated with a specific customer, providing valuable insights into loan amounts, interest rates, monthly installments, and the number of remaining EMIs.

This Credit Approval System project showcases proficiency in backend development using Node.js, Express, and MongoDB. The application handles diverse operations, including data modeling, Dockerization, background task execution, and the implementation of a range of API endpoints for effective credit assessment and loan processing.

--- 

