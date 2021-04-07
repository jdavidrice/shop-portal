const router = require('express').Router();
const productController = require('../../controllers/productController.js');

// Matches with "/api/product"
router.route('/').get(productController.findAll).post(productController.create);

// Matches with "/api/products/:id"
router
  .route('/:id')
  .get(productController.findById)
  .put(productController.update)
  .delete(productController.remove);

// Matches with "/api/sku/:sku"
router
  .route('/sku/:sku')
  .get(productController.findBySku)
  .put(productController.update)
  .delete(productController.remove);

  // Matches with "/api/name/:name"
router
  .route('/name/:name')
  .get(productController.findByName)
  .put(productController.update)
  .delete(productController.remove);

module.exports = router;
