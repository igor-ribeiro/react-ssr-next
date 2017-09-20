const express = require('express')
const cors = require('cors')

const app = express()

const products = require('./products.js')

app.use(cors())

app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/products/:id', (req, res) => {
  const product = products.find(prod => prod.id === req.params.id)

  res.send(product)
})

app.listen(3030, () => console.log('Running on 3030'))
