const express = require('express');
const router = express.Router();
const db = require('../model/db');
const usersModel = require('../model/user');


/* GET users listing. */
router.get('/', async function (req, res) {

  let result = await usersModel.getUsers();
  res.render("users", { title: "Users", users: result });
});

router.get('/:userId', async function (req, res) {

  let userId = parseInt(req.params.userId.trim());
  let result = await usersModel.getUser(userId);
  //console.log(result);
  res.send(result);
});

module.exports = router;
