const router = require('express').Router();
const {
  getServices,
  createServices,
} = require('../controllers/servicesController');

router.route('/services').get(getServices);
router.route('/admin/service/new').post(createServices);

module.exports = router;
