const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({
  city: {
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
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  territory: {
    type: String,
  },
});

const Office = mongoose.model('Office', officeSchema);

module.exports = Office;
