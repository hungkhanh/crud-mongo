const Employee = require('../config/database/models/employees.model');

const findAll = async () => {
  return await Employee.find({});
};

const create = async (data) => {
  return await Employee.create(data);
};

const deleteAll = async () => {
  return await Employee.deleteMany({});
};

const findOne = async (id) => {
  return await Employee.findById(id);
};

const update = async (id, data) => {
  return await Employee.findOneAndUpdate({_id: id}, data);
};

const deleteOne = async (id) => {
  return await Employee.findOneAndDelete({_id: id});
};

const findByReportsTo = async (id) => {
  return await Employee.find({reportsTo: id});
};

const findByOfficeCode = async (id) => {
  return await Employee.find({officeCode: id});
};

module.exports = {
  findAll,
  create,
  deleteAll,

  findOne,
  update,
  deleteOne,

  findByReportsTo,
  findByOfficeCode,
};
