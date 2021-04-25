const db = require('../models/reviewModel');
const ObjectId = require('mongodb').ObjectID;
// Defining methods for the postsController Review

module.exports = {
  findAll: function (req, res) {
    db.find(req.query)
     // .populate('product user')
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findProductWithReviews: function (req, res) {
    db.aggregate([
      {
        $match: {
          product: ObjectId(req.params.product),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "product"
        }
      },
      {
        $group: {
          _id: "$$ROOT.product._id",
          averageStars: {
            $avg: "$rating"
          },
          name: {
            $first: "$product.name"
          },
          imageUrl: {
            $first: "$product.imageUrl"
          },
          imageKey: {
            $first: "$product.imageKey"
          },
          description: {
            $first: "$product.description"
          },
          price: {
            $first: "$product.price"
          },
          reviews: {
            $push: {
              title: "$$ROOT.title",
              description: "$$ROOT.description",
              rating: "$$ROOT.rating",
              created: "$$ROOT.created",
              firstName: "$$ROOT.user.firstName",
              lastName: "$$ROOT.user.lastName"
            },            
          },          
        },        
      },
    ])
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByStars: function (req, res) {
    db.findOne({ rating: 'rating' })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUser: function (req, res) {
    db.findOne({ user: 'user' })
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
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
