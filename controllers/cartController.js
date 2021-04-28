const db = require('../models/cartModel');
const ObjectId = require('mongodb').ObjectID;

// Defining methods for the cartController

module.exports = {
  findAll: function (req, res) {
    db.find(req.query)
      .populate('user products.product')
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.findById({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeAProduct: async function (req, res) {
    let filter = req.params.id;
    let pull = {
      $pull: {
        products: { _id: ObjectId(req.body.id)},
      },
    };
    const options = {
      new: true,
    };
   await db
      .findByIdAndUpdate(filter, pull, options)
      .then(res.status(201).json({ message: 'Product removed' }))
      .catch((err) => res.status(422).json(err));
  },

  findByUserandStatus: function (req, res) {
    db.find({ user: req.params.user, status: req.params.status })
      .populate('products.product products.product.brand')
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(res.status(201).json({ message: 'Product updated' }))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    let removeProduct = new db({ id: req.params.id });
    db.findById({ _id: removeProduct.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //  *****UNUSED*****
  // findByIdandProduct: function (req, res) {
  //   db.find({ _id: req.params.id, 'products._id': req.params.product })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findByProduct: function (req, res) {
  //   let findProduct = new db({
  //     'products._id': req.params.product,
  //   });
  //   db.findOne(findProduct)
  //     .populate('products.product products.product.brand')
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findByStatus: function (req, res) {
  //   db.findOne(req.params.status)
  //     .populate('products.product products.product.brand')
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  //  *****END OF UNUSED*****
};
