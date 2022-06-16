const Services = require('../models/servicesModel');

exports.getServices = async (req, res) => {
  try {
    const services = await Services.find();

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
