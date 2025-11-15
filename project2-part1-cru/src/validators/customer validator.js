const { body } = require('express-validator');

const createCustomerRules = [
  body('firstName').isString().trim().notEmpty(),
  body('lastName').isString().trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional().isString().trim(),
  body('address').optional().isObject(),
  body('address.line1').optional().isString().trim(),
  body('address.city').optional().isString().trim(),
  body('address.country').optional().isString().trim()
];

const updateCustomerRules = [
  body('firstName').optional().isString().trim().notEmpty(),
  body('lastName').optional().isString().trim().notEmpty(),
  body('email').optional().isEmail().normalizeEmail(),
  body('phone').optional().isString().trim(),
  body('address').optional().isObject(),
  body('address.line1').optional().isString().trim(),
  body('address.city').optional().isString().trim(),
  body('address.country').optional().isString().trim()
];

module.exports = { createCustomerRules, updateCustomerRules };
