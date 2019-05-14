const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true }
})

supplierSchema.virtual('items', {
  ref: 'Products',
  localField: '_id',
  foreignField: 'supplier'
})

module.exports = mongoose.model('Supplier', supplierSchema)
