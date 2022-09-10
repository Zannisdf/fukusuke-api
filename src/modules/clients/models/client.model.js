const { createModel } = require('../../../libs/persistence');

const Client = createModel('Client', {
  name: String,
  dni: String,
  email: String,
  phone: String,
});

module.exports = {
  Client,
};
