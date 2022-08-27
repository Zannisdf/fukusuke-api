require('dotenv').config();
const express = require('express');
const { connect } = require('./src/libs/persistence');
const { appModule } = require('./src/app.module');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(appModule);

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
