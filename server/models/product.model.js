const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: [true, "Title is required."],
    minlength: [3, "Length must be at least 3."]
  },
  price: {
    type: Number, 
    required: [true, "Price is required."],
    min: [0, "Price must be at least 1 dollar"]
  },
  description: {
    type: String, 
    required: [true, "Description is required."],
    minlength: [10, "Desc must be at least 10 chars long."]
  }
}, {timestamps: true});
module.exports.Product = mongoose.model('Product', ProductSchema);