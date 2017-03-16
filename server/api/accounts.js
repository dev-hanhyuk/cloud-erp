'use strict'

const router = require('express').Router()
const db = require('../../db')
const Account = db.model('account')
const Entry = db.model('entry')
const _ = require('lodash')

module.exports = router



router.get('/', (req, res, next) => {
  Account.findAll()
    .then(accounts => res.send(accounts))
    .catch(next)
})

router.get('/entries', (req, res, next) => {
  Entry.findAll({ include: {model: Account} })
    .then(entries => res.send(entries))
    .catch(next)
})

router.get('/entries/:accountId', (req, res, next) => {
  Account.findById(req.params.accountId)
    .then(account => account.getEntries())
    .then(entries => res.send(entries))
    .catch(next)
})

router.post('/entries/:accountId', (req, res, next) => {
  console.log('****************\n', req.body);
  Entry.create(req.body)
    .then(entry => {
      entry.setAccount(req.params.accountId)
      entry.setPosted(req.body.posted)
      return
    })
    .then(() => res.sendStatus(201))
    .catch(next)
})
