const Product = require('../models/product.model');
const { validationResult } = require('express-validator');

exports.getAll = async (req, res) => {
  try {
    const items = await Product.find();
    return res.status(200).json(items);
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await Product.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json(item);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
};

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const data = req.body;
    data.sku = data.sku.toUpperCase();
    const created = await Product.create(data);
    return res.status(201).json(created);
  } catch (err) {
    const code = err.code === 11000 ? 409 : 500; // duplicate key
    return res.status(code).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json(updated);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
};
