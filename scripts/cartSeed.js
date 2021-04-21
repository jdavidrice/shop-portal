const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Brand collection and inserts the brands below.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const cartSeed = [
  {
    user: '607f817121733017feb5ae69',
    status: 'Not processed',
    products: [
      {
        id: '608b11244d6de74ff8b9d44f',
        product: '607f81a0c622c1182b611daf',
        quantity: 2,
        totalPrice: 24,
      },
      {
        id: '608b11744d6de74ff8b9d44f',
        product: '607f81a0c622c1182b611dae',
        quantity: 3,
        totalPrice: 30,
      },
    ],
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    user: '607f817121733017feb5ae69',
    status: 'Processing',
    products: [
      {
        id: '608b11544d6de74ff8b9d44f',
        product: '607f81a0c622c1182b611daf',
        quantity: 10,
        totalPrice: 120,
      },
      {
        id: '608b11644d6de74ff8b9d44f',
        product: '607f81a0c622c1182b611dae',
        quantity: 1,
        totalPrice: 12,
      },
    ],
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
];

db.Cart.deleteMany({})
  .then(() => db.Cart.insertMany(cartSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
