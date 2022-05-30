const Customer = require('../config/database/models/customers.model');

const findAll = async () => {
  return await Customer.find({});
};

const create = async (data) => {
  return await Customer.create(data);
};

const deleteAll = async () => {
  return await Customer.deleteMany({});
};

const findOne = async (id) => {
  return await Customer.findById(id);
};

const update = async (id, data) => {
  return await Customer.findOneAndUpdate({_id: id}, data);
};

const deleteOne = async (id) => {
  return await Customer.findOneAndDelete({_id: id});
};

const findByEmployee = async (id) => {
  return await Customer.find({salesRepEmployeeId: id});
};

module.exports = {
  findAll,
  create,
  deleteAll,

  findOne,
  update,
  deleteOne,

  findByEmployee,
};
