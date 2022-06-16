const router = require('express').Router();
const { getServices } = require('../controllers/servicesController');

router.route('/services').get(getServices);

module.exports = router;
