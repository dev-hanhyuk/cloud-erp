'use strict'

const router = require('express').Router()
const db = require('../../db')
const Account = db.model('account')
const _ = require('lodash')

module.exports = router

const find_by_id = (account_id) => {
  return Account.findAll({where: {$or: [{acct_id: account_id}, {acct_name: account_id}]} })
    .then(accounts => {
      let accountDetail = [];
      accounts.map(acct => {
        let net_balance = {net_balance: acct.net_balance()};
        accountDetail.push(Object.assign({}, acct.dataValues, net_balance))
      })
      return accountDetail
    })
}


router.get('/', (req, res, next) => {
  Account.findAll()
    .then(accounts => res.send(accounts))
    .catch(next)
})

router.get(`/:accountId`, (req, res, next) => {
    find_by_id(req.params.accountId)
      .then(accountDetail => res.send(accountDetail))
      .catch(next)
})

router.post('/api/accounts/find', (req, res, next) => {
  const {} = req.body;
  // Account.findAll({ where: })
})


router.post('/register/:adminId', (req, res, next) => {
  Account.create(req.body)
    .then(account => {
      account.setPosted(req.params.adminId)
      res.send(account)
    })
    .catch(next)
})


router.post('/post/:accountId', (req, res, next) => {
  Account.create(req.body)
    .then(account => account.setPosted(req.body.posted))
    .then(() => find_by_id(req.params.accountId))
    .then(accountDetail => res.send(accountDetail))
    .catch(next)
})
