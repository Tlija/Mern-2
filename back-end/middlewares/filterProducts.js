const productModel = require("../models/product");

const filterProduct = async (req, res, next) => {
  let products = [];
  if (req.query.price) {
    products = await productModel.find({ price: { $gte: req.query.price } });
  } else {
    products = await productModel.find({});
  }
  req.products = products;
  next();
};
module.exports = { filterProduct };