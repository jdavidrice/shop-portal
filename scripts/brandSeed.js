const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Brand collection and inserts the brands below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const brandSeed = [
  {
    slug: 'b-culprit-apparel',
    name: 'Culprit Apparel',
    image: 'sL9pET=CYjUKPFcO',
    description: 'Trendy women clothing',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-juslink',
    name: 'Juslink',
    image: 'ByyCbWstOexPGODe',
    description: 'Kids clothing and accessories',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-ikeam',
    name: 'Ikeam',
    image: 'Ft6jmy51BgeDWGCd',
    description: 'Scandinavian styled furniture',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-mevecco',
    name: 'Mevecco',
    image: 'YJebbTIm2weiMfty',
    description: 'Designer high-quality handmade jewelry',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-nike',
    name: 'Nike',
    image: 'N7cRikSofVii=uyo',
    description: 'Sports equipment brand',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-audi',
    name: 'Audi',
    image: 'dTR9CH7M3rHERbFy',
    description:
      'German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles',
    isActive: false,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
];

db.Brand.deleteMany({})
  .then(() => db.Brand.insertMany(brandSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
