const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, trim: true },
    address: {
      line1: { type: String, trim: true },
      city: { type: String, trim: true },
      country: { type: String, trim: true }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Customer', customerSchema);
