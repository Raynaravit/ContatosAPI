const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.index);
router.post('/', taskController.create);
router.get('/:id', taskController.show);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.delete);

module.exports = router;
