const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    sku: { type: String, required: true, unique: true, uppercase: true },
    description: { type: String, required: true, minlength: 10 },
    price: { type: Number, required: true, min: 0 },
    currency: { type: String, required: true, enum: ['USD', 'NGN', 'EUR'] },
    inStock: { type: Boolean, default: true },
    quantity: { type: Number, required: true, min: 0 },
    categories: { type: [String], default: [] }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
