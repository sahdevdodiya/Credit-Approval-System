const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  loan_amount: { type: Number, required: true },
  tenure: { type: Number, required: true },
  interest_rate: { type: Number, required: true },
  emis_paid_on_time: { type: Number, default: 0 },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
