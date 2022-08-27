const productsService = require('../services/products.service');

const registerProductsController = (router) => {
  router.post('/products', (req, res) => {
    productsService.create(req.body).then((product) => res.json(product));
  });

  router.get('/products/:id', (req, res) => {
    productsService.findOne(req.params.id).then((product) => res.json(product));
  });

  router.patch('/products/:id', (req, res) => {
    productsService
      .update(req.params.id, req.body)
      .then((product) => res.json(product));
  });

  router.delete('/products/:id', (req, res) => {
    productsService.remove(req.params.id).then(() => res.status(204).send());
  });
};

module.exports = {
  registerProductsController,
};
