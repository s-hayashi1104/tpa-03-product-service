const {
  getTotalPrice,
  getProducts,
} = require('./product');

const getProductsHandler = function(req, res) {
  const obj = { 'products': getProducts() };
  res.json(obj);
};

const calcTotalPriceHandler = function(req, res) {
  let flag = false;
  const selectIds = req.query.ids.split(',');
  const products = getProducts();
  selectIds.forEach((element) => {
    const num = parseInt(element, 10);
    if (Number.isNaN(num)) {
      flag = true;
    }
    if (products.length < num) {
      flag = true;
    }
  });

  if (flag) return res.status(400).json({});

  const price = getTotalPrice(selectIds);

  const obj = {
    'productIds': selectIds,
    'total': price,
  };
  res.json(obj);
};

module.exports = {
  getProductsHandler,
  calcTotalPriceHandler,
};
