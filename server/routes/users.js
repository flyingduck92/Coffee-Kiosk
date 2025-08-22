const router = require('express').Router()

// Create a user
router.post('/', (req, res) => {
  // ...create logic...
  res.send('Create user')
})

// Read all users
router.get('/', (req, res) => {
  // ...read logic...
  res.send('Get all users')
})

// Read a single user
router.get('/:id', (req, res) => {
  // ...read one logic...
  res.send(`Get user ${req.params.id}`)
})

// Update a user
router.put('/:id', (req, res) => {
  // ...update logic...
  res.send(`Update user ${req.params.id}`)
})

// Delete a user
router.delete('/:id', (req, res) => {
  // ...delete logic...
  res.send(`Delete user ${req.params.id}`)
})

module.exports = router
