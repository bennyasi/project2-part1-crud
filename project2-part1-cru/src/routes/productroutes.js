const express = require('express');
const ctrl = require('../controllers/product.controller');
const { createProductRules, updateProductRules } = require('../validators/product.validator');

const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', createProductRules, ctrl.create);
router.put('/:id', updateProductRules, ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
