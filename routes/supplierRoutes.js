const express = require('express');
const ctrl = require('../controllers/supplierController');
const router = express.Router();

router.get('/', ctrl.index);
router.get('/new', ctrl.newForm);
router.post('/', ctrl.create);
router.get('/:id/edit', ctrl.editForm);
router.post('/:id', ctrl.update);
router.post('/:id/delete', ctrl.remove);

module.exports = router;