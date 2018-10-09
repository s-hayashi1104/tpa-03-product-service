const {
  getTotalPrice,
  getProducts,
} = require('./product');

const getProductsHandler = function(req, res) {
  const obj = { products: getProducts() };
  res.json(obj);
};

const calcTotalPriceHandler = function(req, res) {
  let flag = false;
  const selectIds = req.query.ids.split(',');
  selectIds.forEach((element) => {
    const num = parseInt(element, 10);
    if (Number.isNaN(num)) {
      flag = true;
    }
  });

  if (flag) return res.status(400).json({});

  const price = getTotalPrice(selectIds);

  if (!price) return res.status(400).json({});

  const obj = {
    productIds: selectIds,
    total: price,
  };
  res.json(obj);
};

module.exports = {
  getProductsHandler,
  calcTotalPriceHandler,
};
