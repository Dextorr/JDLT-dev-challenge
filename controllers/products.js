const Product = require('../models/product')

const indexRoute = (req, res, next) => {
  Product
    .find()
    .populate('supplier')
    .then(products => res.json(products))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
