const express = require('express');
const ctrl = require('../controllers/customer.controller');
const { createCustomerRules, updateCustomerRules } = require('../validators/customer.validator');

const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', createCustomerRules, ctrl.create);
router.put('/:id', updateCustomerRules, ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
