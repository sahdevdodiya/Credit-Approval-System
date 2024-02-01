const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  phone_number: { type: String, required: true },
  monthly_salary: { type: Number, required: true },
  approved_limit: { type: Number, required: true },
  current_debt: { type: Number, required: true },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
