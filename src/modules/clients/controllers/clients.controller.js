const clientsService = require('../services/clients.service');

const registerClientsController = (router) => {
  router.post('/clients', (req, res) => {
    clientsService.create(req.body).then((product) => res.json(product));
  });

  router.get('/clients/:id', (req, res) => {
    clientsService.findOne(req.params.id).then((product) => res.json(product));
  });

  router.patch('/clients/:id', (req, res) => {
    clientsService
      .update(req.params.id, req.body)
      .then((product) => res.json(product));
  });

  router.delete('/clients/:id', (req, res) => {
    clientsService.remove(req.params.id).then(() => res.status(204).send());
  });
};

module.exports = {
  registerClientsController,
};
