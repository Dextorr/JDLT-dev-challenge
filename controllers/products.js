const Product = require('../models/product')

const indexRoute = (req, res) => {
  Product
    .find()
    .then(products => res.json(products))
    .catch(err => console.error(err))
}

module.exports = {
  index: indexRoute
}
