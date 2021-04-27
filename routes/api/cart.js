const router = require('express').Router();
const cartController = require('../../controllers/cartController.js');

// url "/api/cart"
router.route('/').get(cartController.findAll).post(cartController.create);

// Matches with cart id and product id
router
  .route('/product/:id')
  .put(cartController.removeAProduct)   // used in cart page to remove one item

router
  .route('/:id')
  .get(cartController.findById)
  .put(cartController.update) // used in the cart page
  .delete(cartController.remove);

// Matches with user id and status
router
  .route('/:user/:status')
  .get(cartController.findByUserandStatus)  // used in shop and itemDetailsPage
  .put(cartController.update)
  .delete(cartController.remove);


//  *****UNUSED*****
// Matches with product id only
// router
//   .route('/product/:product')
//   .get(cartController.findByProduct)
//   .put(cartController.update)
//   .delete(cartController.remove);

// Matches with "/status/:status"
// router
//   .route('/status/:status')
//   .get(cartController.findByStatus)
//   .put(cartController.update)
//   .delete(cartController.remove);
//  *****END OF UNUSED*****
module.exports = router;
