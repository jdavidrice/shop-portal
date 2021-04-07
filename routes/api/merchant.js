const router = require('express').Router();
const merchantController = require('../../controllers/merchantController.js');

// Matches with "/api/merchant"
router
  .route('/')
  .get(merchantController.findAll)
  .post(merchantController.create);

// Matches with "/api/merchant/:id"
router
  .route('/:id')
  .get(merchantController.findById)
  .put(merchantController.update)
  .delete(merchantController.remove);

// Matches with "/email/:email"
router
  .route('/email/:email')
  .get(merchantController.findByEmail)
  .put(merchantController.update)
  .delete(merchantController.remove);

// Matches with "lastname/:lastname"
router
  .route('/phonenumber/:phonenumber')
  .get(merchantController.findByPhoneNumber)
  .put(merchantController.update)
  .delete(merchantController.remove);

module.exports = router;
