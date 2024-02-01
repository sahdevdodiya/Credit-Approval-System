const express = require('express');
const router = express.Router();
const Loan = require('../models/loan');
const Customer = require('../models/customer');

// /create-loan - Process a new loan based on eligibility
router.post('/create-loan', async (req, res) => {
  try {
    const { customer_id, loan_amount, interest_rate, tenure } = req.body;

    // Fetch customer data
    const customer = await Customer.findById(customer_id);

    // Implement your logic to check loan eligibility
    // ...

    // Example response (modify as per your logic)
    if (loan_eligible) {
      // Create a new loan
      const newLoan = await Loan.create({
        customer_id,
        loan_amount,
        interest_rate,
        tenure,
        emis_paid_on_time: 0, // Initial value for EMIs paid on time
        date_of_approval: new Date(),
        end_date: calculateEndDate(new Date(), tenure), // Implement your logic to calculate end date
      });

      res.json({
        loan_id: newLoan._id,
        customer_id: newLoan.customer_id,
        loan_approved: true,
        message: 'Loan approved!',
        monthly_installment: calculateMonthlyInstallment(loan_amount, interest_rate, tenure),
      });
    } else {
      res.json({
        loan_id: null,
        customer_id,
        loan_approved: false,
        message: 'Loan not approved. Check eligibility criteria.',
        monthly_installment: 0,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to calculate end date
function calculateEndDate(startDate, tenure) {
  // Implement your logic to calculate end date
  // ...
  return calculated_end_date;
}

// Function to calculate monthly installment
function calculateMonthlyInstallment(loan_amount, interest_rate, tenure) {
  // Implement your logic to calculate the monthly installment
  // ...
  return calculated_monthly_installment;
}

module.exports = router;
