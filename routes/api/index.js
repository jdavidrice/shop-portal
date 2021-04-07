const router = require('express').Router();
const userRoutes = require('./users');
const addressRoutes = require('./address');
const productRoutes = require('./product');
const categoryRoutes = require('./category');
const cartRoutes = require('./cart');
const brandRoutes = require('./brand');
const contactRoutes = require('./contact');
const merchantRoutes = require('./merchant');
const orderRoutes = require('./order');

// Post Routes
router.use('/user', userRoutes);
router.use('/address', addressRoutes);
router.use('/product', productRoutes);
router.use('/category', categoryRoutes);
router.use('/cart', cartRoutes);
router.use('/brand', brandRoutes);
router.use('/contact', contactRoutes);
router.use('/merchant', merchantRoutes);
router.use('/order', orderRoutes);

module.exports = router;
