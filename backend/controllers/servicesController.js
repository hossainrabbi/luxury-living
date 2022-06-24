const Services = require('../models/servicesModel');

exports.getServices = async (_req, res) => {
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

exports.deleteService = async (req, res) => {
  try {
    await Services.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateService = async (req, res) => {
  console.log(req.body);
  try {
    const service = await Services.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
