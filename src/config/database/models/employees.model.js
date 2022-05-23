const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  lastName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  extension: {
    type: String,
  },
  email: {
    type: String,
  },
  officeCode: {
    type: String,
  },
  reportsTo: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
