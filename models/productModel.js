//Product Schema with isFeatured
const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = Mongoose;

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120,
};

Mongoose.plugin(slug, options);

// Product Schema with isFeatured
const ProductSchema = new Schema({
  sku: {
    type: String,
    unique: true,
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true,
  },
  name: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
  },
  imageKey: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  taxable: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },  
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    default: null,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});
module.exports = Mongoose.model('Product', ProductSchema);
