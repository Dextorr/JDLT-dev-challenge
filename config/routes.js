const routes = require('express').Router()

const productsController = require('../controllers/products')

routes.get('/products', productsController.index)

module.exports = routes
