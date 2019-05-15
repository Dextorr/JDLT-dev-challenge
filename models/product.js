const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  supplier: { type: mongoose.Schema.ObjectId, ref: 'Supplier', required: true },
  price: { type: Number, required: true}
})

productSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Product', productSchema)
