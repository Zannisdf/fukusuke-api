require('dotenv').config();
const express = require('express');
const { connect } = require('./libs/persistence');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application started in port ${PORT}`);

  connect()
    .then(() => {
      console.log('Application connected to the DB');
    })
    .catch(() => {
      console.error('Could not connect to the DB, please try again!');
    });
});
