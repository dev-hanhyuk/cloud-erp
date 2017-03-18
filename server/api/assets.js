'use strict'

const router = require('express').Router()
const db = require('../../db')
const Asset = db.model('asset')

module.exports = router


router.get('/', (req, res, next) => {
  Asset.findAll()
    .then(assets => res.send(assets))
    .catch(next)
})

router.post(`/register`, (req, res, next) => {
  Asset.create(req.body)
    .then(asset => res.sendStatus(201))
    .catch(next)
})