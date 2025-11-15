const Customer = require('../models/customer.model');
const { validationResult } = require('express-validator');

exports.getAll = async (req, res) => {
  try {
    const items = await Customer.find();
    return res.status(200).json(items);
  } catch {
    return res.status(500).json({ error: 'Server error' });
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await Customer.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json(item);
  } catch {
    return res.status(400).json({ error: 'Invalid ID' });
  }
};

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const created = await Customer.create(req.body);
    return res.status(201).json(created);
  } catch (err) {
    const code = err.code === 11000 ? 409 : 500;
    return res.status(code).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const updated = await Customer.findByIdAndUpdate(
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
    const deleted = await Customer.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    return res.status(204).send();
  } catch {
    return res.status(400).json({ error: 'Invalid ID' });
  }
};
