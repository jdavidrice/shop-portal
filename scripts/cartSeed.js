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
    user: '607f011cc8066878588f6f6b',
    status: 'Not processed',
    products: [
      {
        id: '608b11244d6de74ff8b9d44f',
        product: '607f0273f893c08dec101350',
        quantity: 2,
        totalPrice: 24,
      },
      {
        id: '608b11744d6de74ff8b9d44f',
        product: '607f0273f893c08dec101351',
        quantity: 3,
        totalPrice: 30,
      },
    ],
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    user: '607f011cc8066878588f6f6b',
    status: 'Processing',
    products: [
      {
        id: '608b11544d6de74ff8b9d44f',
        product: '607f0273f893c08dec101350',
        quantity: 10,
        totalPrice: 120,
      },
      {
        id: '608b11644d6de74ff8b9d44f',
        product: '607f0273f893c08dec101351',
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
