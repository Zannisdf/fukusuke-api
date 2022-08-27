const { getConfig } = require('../config');
const mongoose = require('mongoose');

const connect = () => {
  const [connection, user, password, host, name] = [
    'DB_CONNECTION',
    'DB_USER',
    'DB_PASSWORD',
    'DB_HOST',
    'DB_NAME',
  ].map(getConfig);

  const dbUri = `${connection}${user}:${password}@${host}/${name}?retryWrites=true&w=majority`;

  return mongoose.connect(dbUri);
};

module.exports = {
  connect,
};
