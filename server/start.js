'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const app = express()
app.use(require('volleyball'))


module.exports = app
  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))
  // Serve API routes
  .use('/api', require('./api'))
  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

if (module === require.main) {
  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`Listening on ${JSON.stringify(server.address())}`)
    }
  )
}