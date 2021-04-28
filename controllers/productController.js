const db = require('../models/productModel');

// Defining methods for the postsController product
module.exports = {
  findAll: function (req, res) {
    db.find(req.query)
      .populate('brand')
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.findById(req.params.id)
      .populate('brand')
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findBySku: function (req, res) {
    db.findOne({ sku: req.params.sku })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.findOne({ name: req.params.name })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createProduct = new db({
      sku: req.body.sku,
      slug: req.body.slug,
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      imageKey: req.body.imageKey,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      taxable: req.body.taxable,
      isActive: req.body.isActive,
      brand: req.body.brand,
      created: req.body.created,
      updated: req.body.updated,
    });
    db.create(createProduct)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findIsFeatured: function (req, res) {
    db.find({ isFeatured: 'true' })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
