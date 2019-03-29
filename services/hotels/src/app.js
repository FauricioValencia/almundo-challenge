const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = function appBuilder({ router, port, baseUrl }) {
  //Building Express server
  const server = express();
  server.use(cors());
  server.use(baseUrl, router);
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  //Connecting to MongoDB database
  const { MONGO_USER, MONGO_PWD, MONGO_DB } = process.env;

  mongoose.connect(
    `mongodb://${MONGO_USER}:${MONGO_PWD}@database:27017/almundo`,
    {
      useNewUrlParser: true
    }
  );

  return {
    start: () =>
      server.listen(port, () => console.log(`App listening on port ${port}!`))
  };
};

module.exports = app;
