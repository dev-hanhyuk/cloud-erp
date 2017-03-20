'use strict'
const bcrypt = require('bcrypt')
const router = require('express').Router()
const db = require('../../db')
const debug = require('debug')('auth')
const Admin = db.model('admin')

module.exports = router


router.post(`/login`, (req, res, next) => {
  const { email, password } = req.body;

  Admin.findOne({ where: { email }})
    .then(user => {
        if (!user) {
          debug('authenticate user(email: "%s") did fail: no such user', email)
          res.sendStatus(401)
        }
        return user.authenticate(password)
          .then(authenticated => {
            if (!authenticated) {
              debug('authenticate user(email: "%s") did fail: bad password')
              res.sendStatus(401)
            } else {
              debug('authenticate user(email: "%s") did ok: user.id=%d', user.id)
              res.send(user)
            }
          })
      })
      .catch(next)
})

router.post(`/register`, (req, res, next) => {
  Admin.create(req.body)
    .then(user => res.send(user))
    .catch(next)
})