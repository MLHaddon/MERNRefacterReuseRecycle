const { Product } = require('../models/product.model');
module.exports.index = (req, res) => {
  Product.find({})
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.createProduct = (req, res) => {
  const {title, price, description} = req.body;
  Product.create({
    title,
    price,
    description
  })
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.OneProduct = (req, res) => {
  Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(response => res.json(response))
    .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({_id: req.params.id})
    .then(confirm => res.json(confirm))
    .catch(err => res.json(err));
}