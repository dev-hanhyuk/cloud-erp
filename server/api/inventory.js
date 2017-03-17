'use strict'

const router = require('express').Router()
const db = require('../../db')
const Inventory = db.model('inventory')
const _ = require('lodash')

module.exports = router


router.get('/', (req, res, next) => {
  Inventory.findAll()
    .then(inventories => res.send(inventories))
    .catch(next)
})


router.post('/:productId/purchase', (req, res, next) => {
  Inventory.create(req.body)
    .then(inventory => inventory.setProduct(req.params.productId))
    .then(inventory => res.send(inventory))
    .catch(next)
})


router.post('/:productId/decrease', (req, res, next) => {
  Inventory.findAll()
    .then(inventories => {
      const filtered_inventories = _.filter(_.sortBy(inventories, i => i.dataValues.id), i => i.remainder > 0)
      let q = -req.body.quantity;
      let total_cost = 0;
      let unit_price = 0;
      let description = ''

      if (filtered_inventories.map(i => i.dataValues.remainder).reduce((p, c) => p + c, 0) > q) {
        for (let i=0; i < filtered_inventories.length; i++) {
          if (filtered_inventories[i].dataValues.remainder >= q) {
            total_cost += filtered_inventories[i].unit_price * q;
            description += `{id: ${i+1}, quantity: ${q}}, `;
            filtered_inventories[i].remainder = filtered_inventories[i].remainder - q;
            filtered_inventories[i].save()
            break;
          } else if (filtered_inventories[i].dataValues.remainder < q) {
            total_cost += filtered_inventories[i].unit_price * filtered_inventories[i].remainder;
            q -= filtered_inventories[i].remainder;
            description += `{id: ${i+1}, quantity: ${filtered_inventories[i].remainder}}, `
            filtered_inventories[i].remainder = 0;
            filtered_inventories[i].save();
            continue;
          }
        }

        unit_price = total_cost / -req.body.quantity;
        return Inventory.create({ quantity: req.body.quantity, unit_price, description })
          .then(inventory => inventory.setProduct(req.params.productId))
          .catch(next)

      }
      else {
        throw new Error('insufficient stocks')
      }

    })
})


