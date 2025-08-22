const router = require('express').Router()

// Create a coffee
router.post('/', (req, res) => {
  // ...create logic...
  res.send('Create coffee')
})

// Read all coffees
router.get('/', (req, res) => {
  // ...read logic...
  res.send('Get all coffees')
})

// Read a single coffee
router.get('/:id', (req, res) => {
  // ...read one logic...
  res.send(`Get coffee ${req.params.id}`)
})

// Update a coffee
router.put('/:id', (req, res) => {
  // ...update logic...
  res.send(`Update coffee ${req.params.id}`)
})

// Delete a coffee
router.delete('/:id', (req, res) => {
  // ...delete logic...
  res.send(`Delete coffee ${req.params.id}`)
})

module.exports = router
