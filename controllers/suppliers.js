const Supplier = require('../models/supplier')

const indexRoute = (req, res) => {
  Supplier
    .find()
    .populate('items')
    .then(suppliers => res.json(suppliers))
    .catch(err => console.error(err))
}

module.exports = {
  index: indexRoute
}
