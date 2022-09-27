const { createModel } = require('../../../libs/persistence');

const User = createModel('User', {
  type: String,
  id: Number,
  name: String,
  password: String,
});

module.exports = {
  User,
};
