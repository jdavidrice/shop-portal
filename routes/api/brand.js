const router = require('express').Router();
const brandController = require('../../controllers/brandController.js');

// Matches with "/api/users"
router.route('/').get(brandController.findAll).post(brandController.create);

// Matches with "/api/brand/:id"
router
  .route('/:id')
  .get(brandController.findById)
  .put(brandController.update)
  .delete(brandController.remove);

// Matches with "/name/:name"
router
  .route('/name/:name')
  .get(brandController.findByName)
  .put(brandController.update)
  .delete(brandController.remove);

module.exports = router;
