const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
  },
  contactLastName: {
    type: String,
  },
  contactFirstName: {
    type: String,
  },
  phone: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  country: {
    type: String,
  },
  salesRepEmployeeId: {
    type: String,
  },
  creditLimit: {
    type: Number,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
