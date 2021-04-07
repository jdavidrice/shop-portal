const router = require('express').Router();
const cartController = require('../../controllers/cartController.js');

// Matches with "/api/users"
router.route('/').get(cartController.findAll).post(cartController.create);

// Matches with "/api/cart/:id"
router
  .route('/:id')
  .get(cartController.findById)
  .put(cartController.update)
  .delete(cartController.remove);

// Matches with "/product/:product"
router
  .route('/product/:product')
  .get(cartController.findByProduct)
  .put(cartController.update)
  .delete(cartController.remove);

// Matches with "/status/:status"
router
  .route('/status/:status')
  .get(cartController.findByStatus)
  .put(cartController.update)
  .delete(cartController.remove);

module.exports = router;
