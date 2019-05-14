const routes = require('express').Router()

const productsController = require('../controllers/products')
const suppliersController = require('../controllers/suppliers')

routes.get('/products', productsController.index)
routes.get('/suppliers', suppliersController.index)

module.exports = routes
