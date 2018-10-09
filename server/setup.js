const express = require('express');
const {
  getProductsHandler,
  calcTotalPriceHandler,
} = require('./controller');

const setup = (app) => {
  const apiRouter = express.Router();
  apiRouter.get('/products', getProductsHandler);
  apiRouter.get('/price', calcTotalPriceHandler);

  app.use('/api', apiRouter);
};

module.exports = setup;
