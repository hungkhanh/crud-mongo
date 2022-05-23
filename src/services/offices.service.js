const Office = require('../config/database/models/offices.model');

const findAll = async () => {
  return await Office.find({});
};

const create = async (data) => {
  return await Office.create(data);
};

const deleteAll = async () => {
  return await Office.deleteMany({});
};

const findOne = async (id) => {
  return await Office.findById(id);
};

// data: Object. Property in Office
const update = async (id, data) => {
  return await Office.findOneAndUpdate({_id: id}, data);
};

const deleteOne = async (id) => {
  return await Office.findOneAndDelete({_id: id});
};

module.exports = {
  findAll,
  create,
  deleteAll,

  findOne,
  update,
  deleteOne,
};
