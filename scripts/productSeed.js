const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Product collection and inserts the products below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const productSeed = [
  {
    sku: 'wp-tee-194',
    slug: 'wp-tee',
    name: "Women's Relaxed Gray and Black T-Shirt",
    imageUrl:
      'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg',
    imageKey: 'Gray and black t-shirt on a woman',
    description:
      'Heather Grey. Size M. 50% Cotton, 25% Polyester, 25% Rayon. Tumble dry. A must-have comfortable and relaxedfit, super soft blend of cotton/polyester/rayon with short sleeves. Designed and Printed in USA',
    quantity: 10,
    price: 24.99,
    taxable: false,
    isActive: true,
    isFeatured: true,
    isReviewed: ['607dd16cf5b0dd6d0823ba7f', '607dd16cf5b0dd6d0823ba80'],
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    sku: 'kp-sunglasses-123',
    slug: 'kp-sunglasses',
    name: '2 Heart Shaped Sunglasses for Kids',
    imageUrl:
      'https://images.pexels.com/photos/6479569/pexels-photo-6479569.jpeg',
    imageKey: 'Pink and white sunglasses',
    description:
      '2 pairs of sunglasses for kids. One white and one pink. Vintage Cat Eye Model Style Retro. Plastic frame and lens. Non-polarized. UV protection coating up to 400UV.',
    quantity: 500,
    price: 9.99,
    taxable: false,
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    sku: 'fk-table-567',
    slug: 'fk-table',
    name: 'Modern White Small Wooden Bed Side Table',
    imageUrl: 'https://images.unsplash.com/photo-1499933374294-4584851497cc',
    imageKey: 'White wooden table by bed',
    description:
      'Minimalist design lead trend of modern simple life style, white round table top with three wooden legs is suit for theme of fast life and modern decoration. Size: 16 x 16 x 27.55 inches. Required assembly.',
    quantity: 20,
    price: 34.99,
    taxable: false,
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    sku: 'jg-necklace-4567',
    slug: 'jg-necklace',
    name: 'Gold necklace with silver pendant for woman',
    imageUrl: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52',
    imageKey: 'Gold necklace with pendant',
    description:
      '14K gold chain with sterling silver pendant. Main chain of 17 inches with Satellite chain of 14.5 inches. Pendant of 0.5 inches long.',
    quantity: 5,
    price: 64.99,
    taxable: false,
    isActive: true,
    isFeatured: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    sku: 'mp-red-sneaker-345',
    slug: 'mp-red-sneaker',
    name: 'Nike Mens Free Rn 2018 Running Shoe - Red',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    imageKey: 'Red nike sneaker',
    description:
      'Red/Vast Gray size 12 for men. Flywire cables work with the laces for more support as you tighten them. Rounded heel is made to roll with the ground as you stride. Textured toe and heel foam sole sections for traction.',
    quantity: 10,
    price: 145,
    taxable: false,
    isActive: true,
    isFeatured: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    sku: 'sp-backpack-trek1',
    slug: 'sp-backpack',
    name: 'Blackberry backpack',
    imageUrl: 'https://www.yeti.com/dw/image/v2/BBRN_PRD/on/demandware.static/-/Sites-masterCatalog_Yeti/default/dw296d07f0/images/pdp-Crossroads/795x600/795x600/200642-Bags-CLP-22L-Bkpk-PricklyPearPink-795x600.jpg?sw=720&sfrm=png',
    imageKey: 'Red Backpack',
    description:
      'High-performance, durable Blackberry backpack. Capacity: 30 liters',
    quantity: 10,
    price: 199.99,
    taxable: false,
    isActive: true,
    isFeatured: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
];

db.Product.deleteMany({})
  .then(() => db.Product.insertMany(productSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
