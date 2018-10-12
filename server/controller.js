const {
  getTotalPrice,
  getProducts,
} = require('./product');

const getProductsHandler = function(req, res) {
  const obj = { products: getProducts() };
  res.json(obj);
};

const calcTotalPriceHandler = function(req, res) {
  const productIds = req.query.ids.split(',');
  for (let count = 0; count < productIds.length; count += 1) {
    if (Number.isNaN(parseInt(productIds[count], 10))) {
      return res.status(400).json({});
    }
  }

  const total = getTotalPrice(productIds);

  if (!total) return res.status(400).json({});

  const obj = {
    productIds,
    total,
  };
  res.json(obj);
};

module.exports = {
  getProductsHandler,
  calcTotalPriceHandler,
};
