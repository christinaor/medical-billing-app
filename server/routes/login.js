const express = require('express');
const router = express.Router();
const authorizeController = require('../controllers/authorizeController')

router.post('/login', authorizeController.checkUser, (req, res) => {
  res.status(201).json(res.locals.loginResults)
})

router.post('/register', authorizeController.addUser, (req, res) => {
  res.status(201).json(res.locals.registrationId)
})

module.exports = router;