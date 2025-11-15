const { body } = require('express-validator');

const createProductRules = [
  body('name').isString().trim().notEmpty(),
  body('sku').isString().trim().notEmpty(),
  body('description').isString().isLength({ min: 10 }),
  body('price').isFloat({ min: 0 }),
  body('currency').isIn(['USD', 'NGN', 'EUR']),
  body('inStock').optional().isBoolean(),
  body('quantity').isInt({ min: 0 }),
  body('categories').optional().isArray()
];

const updateProductRules = [
  body('name').optional().isString().trim().notEmpty(),
  body('sku').optional().isString().trim().notEmpty(),
  body('description').optional().isString().isLength({ min: 10 }),
  body('price').optional().isFloat({ min: 0 }),
  body('currency').optional().isIn(['USD', 'NGN', 'EUR']),
  body('inStock').optional().isBoolean(),
  body('quantity').optional().isInt({ min: 0 }),
  body('categories').optional().isArray()
];

module.exports = { createProductRules, updateProductRules };
