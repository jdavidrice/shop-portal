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
      'https://www.pexels.com/photo/woman-wearing-gray-shirt-holding-head-428338/',
    imageKey: 'Gray and black t-shirt on a woman',
    description:
      'Heather Grey. Size M. 50% Cotton, 25% Polyester, 25% Rayon. Tumble dry. A must-have comfortable and relaxedfit, super soft blend of cotton/polyester/rayon with short sleeves. Designed and Printed in USA',
    quantity: 10,
    price: 24.99,
    taxable: false,
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    sku: 'kp-sunglasses-123',
    slug: 'kp-sunglasses',
    name: '2 Heart Shaped Sunglasses for Kids',
    imageUrl:
      'https://www.pexels.com/photo/stylish-heart-shaped-sunglasses-on-wooden-surface-6479569/',
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
    imageUrl: 'https://unsplash.com/photos/X63FTIZFbZo',
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
    imageUrl: 'https://unsplash.com/photos/ZhmbakzCBtk',
    imageKey: 'Gold necklace with pendant',
    description:
      '14K gold chain with sterling silver pendant. Main chain of 17 inches with Satellite chain of 14.5 inches. Pendant of 0.5 inches long.',
    quantity: 5,
    price: 64.99,
    taxable: false,
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    sku: 'mp-red-sneaker-345',
    slug: 'mp-red-sneaker',
    name: 'Nike Mens Free Rn 2018 Running Shoe - Red',
    imageUrl: 'https://unsplash.com/photos/164_6wVEHfI',
    imageKey: 'Red nike sneaker',
    description:
      'Red/Vast Gray size 12 for men. Flywire cables work with the laces for more support as you tighten them. Rounded heel is made to roll with the ground as you stride. Textured toe and heel foam sole sections for traction.',
    quantity: 10,
    price: 145,
    taxable: false,
    isActive: true,
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
