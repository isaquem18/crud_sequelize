const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Users = require('./_users/users');
const router = express.Router();

connection
  .authenticate()
  .then()
  .catch();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const usersController = require('./_users/usersController');
app.use('/', usersController);




app.listen(port, (err) => {
  if (err) {
    console.log('SERVER ERROR! ❌❌');
  } else {
    console.log('SERVER STARTED! ✅✅')
  }
});