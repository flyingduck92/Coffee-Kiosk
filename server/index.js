const express = require('express')
const app = express()
const apiRoutes = require('./routes')

// Load environment variables from .env
const dotenv = require('dotenv')
dotenv.config()

// Middleware to parse JSON request bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// api routes
app.use(apiRoutes)

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Coffee Kiosk!' })
})

// Use PORT from .env or default to 3000
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})