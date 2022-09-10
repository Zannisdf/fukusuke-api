const reportsService = require('../services/reports.service');

const registerReportsController = (router) => {
  router.post('/reports', (req, res) => {
    reportsService.create(req.body).then((product) => res.json(product));
  });

  router.get('/reports/:id', (req, res) => {
    reportsService.findOne(req.params.id).then((product) => res.json(product));
  });

  router.patch('/reports/:id', (req, res) => {
    reportsService
      .update(req.params.id, req.body)
      .then((product) => res.json(product));
  });

  router.delete('/reports/:id', (req, res) => {
    reportsService.remove(req.params.id).then(() => res.status(204).send());
  });
};

module.exports = {
  registerReportsController,
};
