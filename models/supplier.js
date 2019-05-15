const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true }
})

supplierSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'supplier'
})

supplierSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    delete json.id
    return json
  }
})

module.exports = mongoose.model('Supplier', supplierSchema)
