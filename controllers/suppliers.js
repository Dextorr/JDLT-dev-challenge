const Supplier = require('../models/supplier')

const indexRoute = (req, res, next) => {
  Supplier
    .find()
    .populate('products')
    .then(suppliers => res.json(suppliers))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
