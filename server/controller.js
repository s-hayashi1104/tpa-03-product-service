const getTotalPrice = require('./product');
// const getProducts = require('./product');
const productsList = require('./data/products.json');

const getProductsHandler = function(req, res) {
  const obj = { 'products': productsList };
  res.json(obj);
};

const calcTotalPriceHandler = function(req, res) {
  const selectIds = req.query.ids;
  const price = getTotalPrice(selectIds);
  res.json(price);
};

module.exports = {
  getProductsHandler,
  calcTotalPriceHandler,
};
