const mongoose = require('mongoose')
const Promise = require('bluebird')
const dbURI = require('../config/environment')

mongoose.Promise = Promise

const Supplier = require('../models/supplier')
const Product = require('../models/product')

console.log(process.env.MONGODB_URI)

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        oldCo: Supplier.create({
          name: 'Old Co Ltd'
        }),
        newCo: Supplier.create({
          name: 'New Co Ltd'
        })
      })
        .then(data => {
          return Promise.props({
            prod1: Product.create({
              name: 'Mini wongle',
              price: 4,
              supplier: data.oldCo
            }),
            prod2: Product.create({
              name: 'Small wongle',
              price: 6,
              supplier: data.oldCo
            }),
            prod3: Product.create({
              name: 'Large wongle',
              price: 9,
              supplier: data.oldCo
            }),
            prod4: Product.create({
              name: 'Super wongle',
              price: 13,
              supplier: data.oldCo
            }),
            prod5: Product.create({
              name: 'Small wongle',
              price: 5,
              supplier: data.newCo
            }),
            prod6: Product.create({
              name: 'Large wongle',
              price: 8,
              supplier: data.newCo
            }),
            prod7: Product.create({
              name: 'Super wongle',
              price: 12,
              supplier: data.newCo
            })
          })
        })
        .then(() => console.log('Seeds sown 🌱'))
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close())
    })
})
