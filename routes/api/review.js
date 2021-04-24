const router = require('express').Router();
const reviewController = require('../../controllers/reviewController.js');



// Matches with "/api/reviews"
router.route('/').get(reviewController.findAll).post(reviewController.create);

// Matches with "/api/reviews/:product" 
router
  .route('/product/:product')  
  .get(reviewController.findProductWithReviews)  // For the itemdetails page only
  .put(reviewController.update)
  .delete(reviewController.remove);


//Matches with "/api/reviews/:id" 
router
  .route('/:id')
  .get(reviewController.findById)
  .put(reviewController.update)
  .delete(reviewController.remove);

// Matches with "/api/reviews/:rating"
router
  .route('/:rating')
  .get(reviewController.findByStars)
  .put(reviewController.update)
  .delete(reviewController.remove);

// Matches with "/api/reviews/:user"
router
  .route('/:user')
  .get(reviewController.findByUser)
  .put(reviewController.update)
  .delete(reviewController.remove);

module.exports = router;
