const router = require('express').Router();
const usersController = require('../../controllers/usersController.js');

// Matches with "/api/users"
router.route('/').get(usersController.findAll).post(usersController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/email/:email"
router
  .route('/email/:email')
  .get(usersController.findByEmail)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/username/:username"
router
  .route('/username/:username')
  .get(usersController.findByUsername)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "lastname/:lastname"
router
  .route('/lastname/:lastname')
  .get(usersController.findByLastname)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "lastname/:lastname"
router
  .route('/phonenumber/:phonenumber')
  .get(usersController.findByPhoneNumber)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
