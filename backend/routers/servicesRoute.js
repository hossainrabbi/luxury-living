const router = require('express').Router();
const {
  getServices,
  createServices,
  deleteService,
  updateService,
  getSingleService,
} = require('../controllers/servicesController');

router.route('/services').get(getServices);
router.route('/admin/service/new').post(createServices);
router
  .route('/admin/service/:id')
  .delete(deleteService)
  .put(updateService)
  .get(getSingleService);

module.exports = router;
