const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const customerRoutes = require('./routes/customerRoutes');
const loanRoutes = require('./routes/loanRoutes');
const Customer = require('./models/customer');
const Loan = require('./models/loan');
const readExcelFile = require('./excel/');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/credit_approval_db', { useNewUrlParser: true, useUnifiedTopology: true });

// Initialization: Read and Ingest data from customer_data.xlsx
console.log('Before calling readExcelFile');
readExcelFile('./excel/customer_data.xlsx', Customer);
console.log('After calling readExcelFile');

// Background worker to migrate loan data every day at 3 AM
cron.schedule('0 3 * * *', () => {
  console.log('Running loan data migration background worker...');
  readExcelFile('./excel/loan_data.xlsx', Loan);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.use('/api/customers', customerRoutes);
app.use('/api/loans', loanRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Your new route
app.get('/', (req, res) => {
  res.send('Welcome to the home route!');
});
