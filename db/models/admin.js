'use strict'
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const db = require('../index')

const Admin = db.define('admin', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  password: Sequelize.VIRTUAL,
  email: Sequelize.STRING,
  mobile: Sequelize.STRING,
  address: Sequelize.STRING,
  department: Sequelize.ENUM( 'accounting', 'inventory', 'purchase', 'treasury'),
  level: Sequelize.INTEGER
}, {
	indexes: [{fields: ['email'], unique: true,}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
    }
  }
})


function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
	  bcrypt.hash(user.get('password'), 10, (err, hash) => {
		  if (err) reject(err)
		  user.set('password_digest', hash)
      resolve(user)
	  })
  )
}

module.exports = Admin