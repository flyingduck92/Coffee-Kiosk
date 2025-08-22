const express = require('express')
const router = express.Router()
const base = 'api'

const coffeesRouter = require('./coffees')
const usersRouter = require('./users')

router.get(`/${base}`, (req, res) => {
  res.json({ message: "WEB API" })
})

router.use(`/${base}/coffees`, coffeesRouter)
router.use(`/${base}/users`, usersRouter)

module.exports = router
