const Services = require('../models/servicesModel');

exports.getServices = async (req, res) => {
  try {
    const services = await Services.find();

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createServices = async (req, res) => {
  const { name, description, category, image, price } = req.body;
  const service = new Services({
    name,
    description,
    category,
    image,
    price: Number(price),
  });

  try {
    await service.save();

    res.status(201).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
