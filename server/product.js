const products = require('./data/products.json');
const makeMapById = require('./utils/makeMapById');

const productsById = makeMapById(products);

const getProducts = function() {
  return products;
};

const checkIds = function(productIds) {
  const arr = [];
  let flag = true;
  const prods = getProducts();

  prods.forEach(element => arr.push(element.id));

  productIds.forEach((id) => {
    if (arr.indexOf(parseInt(id, 10)) === -1) {
      flag = false;
    }
  });
  return flag;
};

const getTotalPrice = function(productIds) {
  if (!checkIds(productIds)) {
    return false;
  }
  return productIds
    .map(id => productsById[id])
    .reduce((total, product) => total + product.price, 0);
};

module.exports = {
  getProducts,
  getTotalPrice,
};
