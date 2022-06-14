const serviceRouter = require('express').Router();
const { createService } = require('../controllers/serviceController');

serviceRouter.route('/admin/service/new').post(createService);

module.exports = serviceRouter;
