const router = require('express').Router();
const addressController = require('../../controllers/addressController.js');

// Matches with "/api/users"
router.route('/').get(addressController.findAll).post(addressController.create);

// Matches with "/api/address/:id"
router
  .route('/:id')
  .get(addressController.findById)
  .put(addressController.update)
  .delete(addressController.remove);

// Matches with "/user/:user"
router
  .route('/user/:user')
  .get(addressController.findByUser)
  .put(addressController.update)
  .delete(addressController.remove);

// Matches with "/streetAddress/:streetAddress"
router
  .route('/streetAddress/:streetAddress')
  .get(addressController.findByStreetAddress)
  .put(addressController.update)
  .delete(addressController.remove);

// Matches with "/city/:city"
router
  .route('/city/:city')
  .get(addressController.findByCity)
  .put(addressController.update)
  .delete(addressController.remove);

// Matches with "state/:state"
router
  .route('/state/:state')
  .get(addressController.findByState)
  .put(addressController.update)
  .delete(addressController.remove);

// Matches with "country/:country"
router
  .route('/country/:country')
  .get(addressController.findByCountry)
  .put(addressController.update)
  .delete(addressController.remove);

// Matches with "zipcode/:zipcode"
router
  .route('/zipcode/:zipCode')
  .get(addressController.findByZipcode)
  .put(addressController.update)
  .delete(addressController.remove);

module.exports = router;
