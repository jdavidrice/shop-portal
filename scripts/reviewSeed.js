const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Product collection and inserts the products below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const reviewSeed = [
  {
    name: '607f011cc8066878588f6f6d',
    title: 'Great t-shirt!!',
    imageUrl:
      'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg',
    imageKey: 'My new hot t-shirt',
    description: `I love this shirt and wear it a lot. It's super soft and fits great. The shirt has a ladies cut, which is flattering.`,
    totalStars: 5,
    product: '607f81a0c622c1182b611dad',
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    name: '607f011cc8066878588f6f6c',
    title: 't-shirt too big',
    imageUrl:
      'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg',
    imageKey: 't-shirt too big',
    description: `The shirt is not true to size. I ordered a size S but this is as big as a size XL.`,
    totalStars: 2,
    product: '607f81a0c622c1182b611dad',
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
];

db.Review.deleteMany({})
  .then(() => db.Review.insertMany(reviewSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
