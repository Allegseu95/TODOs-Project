const { Router } = require('express');
const { TaskController } = require('../controllers');

const _taskController = new TaskController();
const router = Router();

router.get('/', _taskController.getAll);
router.get('/:taskId', _taskController.getById);
router.post('/', _taskController.create);
router.delete('/:taskId', _taskController.delete);

module.exports = router;
