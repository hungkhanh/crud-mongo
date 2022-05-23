const officesService = require('../services/offices.service');

const getAllOffices = async (req, res) => {
  try {
    const offices = await officesService.findAll();
    res.status(200).json({
      statusCode: 200,
      success: true,
      data: offices,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const createOffice = async (req, res) => {
  try {
    const officeData = req.body;
    await officesService.create(officeData);
    res.status(201).json({
      statusCode: 201,
      success: true,
      message: 'Create one office',
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const deleteAllOffices = async (req, res) => {
  try {
    await officesService.deleteAll();
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Delete all customers',
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const getOneOffice = async (req, res) => {
  try {
    const id = req.params.officeId;
    const office = await officesService.findOne(id);
    if (office) {
      res.status(200).json({
        statusCode: 200,
        success: true,
        data: office,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Not Found',
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const updateOrCreateOffice = async (req, res) => {
  try {
    const id = req.params.officeId;
    const data = req.body;
    const office = await officesService.findOne(id);
    if (office) {
      await officesService.update(id, data);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Update one office',
      });
    } else {
      await officesService.create(data);
      res.status(201).json({
        statusCode: 201,
        success: true,
        message: 'Create one office',
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const updateOffice = async (req, res) => {
  try {
    const id = req.params.officeId;
    const data = req.body;
    const office = await officesService.findOne(id);
    if (office) {
      await officesService.update(id, data);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Update one office',
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Not Found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const deleteOneOffice = async (req, res) => {
  try {
    const id = req.params.officeId;
    const office = await officesService.findOne(id);
    if (office) {
      await officesService.deleteOne(id);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Delete one office',
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Not Found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

module.exports = {
  getAllOffices,
  createOffice,
  deleteAllOffices,

  getOneOffice,
  updateOrCreateOffice,
  updateOffice,
  deleteOneOffice,
};
