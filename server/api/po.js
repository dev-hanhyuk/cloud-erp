'use strict'

const router = require('express').Router()
const db = require('../../db')
const PO = db.model('po')

module.exports = router


router.get(`/`, (req, res, next) => {
  PO.findAll()
    .then(pos => res.send(pos))
    .catch(next)
})

router.post(`/request`, (req, res, next) => {
  PO.create(req.body)
    .then(po => res.send(po))
    .catch(next)
})