const mongoose = require('mongoose');
const db = require('../models');

// This file empties the User collection and inserts the users below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const userSeed = [
  {
    role: 'Admin',
    username: 'HBoss',
    firstName: 'Hugo',
    lastName: 'Boss',
    password: 'Password',
    email: 'Hugo.Boss@admin.com',
    provider: 'Hugo.Boss@admin.com',
    phoneNumber: '508-689-5609',
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    role: 'Merchant',
    username: 'MarcoPolo',
    firstName: 'Marco',
    lastName: 'Polo',
    password: 'sale',
    email: 'marco.polo@merchant.com',
    provider: 'marco.polo@merchant.com',
    phoneNumber: '666-999-6969',
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    role: 'User',
    username: 'BobTheMinion',
    firstName: 'Bob',
    lastName: 'Minion',
    password: '12345',
    email: 'bob.minion@user.com',
    provider: 'bob.minion@user.com',
    phoneNumber: '401-323-5890',
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
];

db.User.deleteMany({})
  .then(() => db.User.insertMany(userSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
