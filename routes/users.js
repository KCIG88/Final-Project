
var express = require('express');
const users = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const userData = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    balance: req.body.balance,
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'registered' })
            })
            .catch(err => { res.send('error:' + err) })
        })
      } else {
        res.json({ error: "User already exists" })
      }
    })
    .catch(err => {
      res.send('error:' + err)
    })
})

users.post('/login', (req, res) => {
  console.log(req.body)
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      console.log(user)
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            email: user.email,
            userName: user.userName,
            balance: user.balance
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "1h"
          })
          res.json(token)
        } else {
          res.json({ error: "Incorrect Password" })
        }
      } else {
        res.json({ error: "User does not exist" })
      }

    }).catch(err => {
      res.send('error:' + err)
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  User.findOne({
    _id: decoded.users._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send("error:" + err)
    })
})

users.put('/updateBalance'(req, res) => {
  balance: this.state.newBalance
  User.findOne({
    email: req.body.email
  }).then(user => {
    console.log(user)
  })
}).catch(err => {
  res.send('error:' + err)
})

module.exports = users;
