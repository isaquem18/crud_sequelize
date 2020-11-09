const express = require('express');
const router = express.Router();
const Users = require('./users')


router.get('/users', (req, res) => {
  Users.findAll({ raw: true }).then((item) => {
    res.json(item)
  });
});

router.post('/users', (req, res) => {
  let $username = req.body.username;
  let $password = req.body.password;
  Users.create({
    username: $username,
    password: $password
  }).then((item) => {
    return res.json(item)
  })
});

router.put('/users/:id', (req, res) => {
  let $username = req.body.username;
  let $password = req.body.password;
  let $id = req.params.id;
  Users.update({ username: $username, password: $password }, { where: { id: $id } })
    .then(item => {
      return res.json(item);
    })
});

router.delete('/users/:id', (req, res) => {
  let $id = req.params.id;
  Users.destroy({ where: { id: $id } })
    .then((item) => res.json(item));
});


module.exports = router;