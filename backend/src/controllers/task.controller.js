const { TaskService } = require('../services');

let _taskService = null;

class TaskController {
  constructor() {
    _taskService = new TaskService();
  }

  async getAll(req, res) {
    const tasks = await _taskService.getAll();
    return res.send(tasks);
  }

  async getById(req, res) {
    const { taskId } = req.params;
    const task = await _taskService.getById(taskId);
    return res.send(task);
  }

  async create(req, res) {
    const { body } = req;
    const createdTask = await _taskService.create(body);
    return res.send(createdTask);
  }

  async delete(req, res) {
    const { taskId } = req.params;
    const deletedTask = await _taskService.delete(taskId);
    return res.send(deletedTask);
  }
}

module.exports = TaskController;
