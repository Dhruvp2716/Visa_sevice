const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.route('/')
  .get(applicationController.getAllApplications)
  .post(applicationController.createApplication);

router.route('/:id')
  .get(applicationController.getApplication)
  .patch(applicationController.updateApplication)
  .delete(applicationController.deleteApplication);

module.exports = router;
