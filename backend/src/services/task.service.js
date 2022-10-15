const { TaskRepository } = require('../repositories');

class TaskService {
  constructor() {
    this.repository = new TaskRepository();
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async getById(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = 'Se debe enviar el id como parametro';
      return error;
    }

    if (id.length !== 24) {
      const error = new Error();
      error.status = 400;
      error.message = 'El id debe ser en formato Id de MongoDb';
      return error;
    }

    const currentEntity = await this.repository.getById(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = 'Entidad no encontrada!';
      return error;
    }

    return currentEntity;
  }

  async create(entity) {
    if (entity.title === undefined || entity.description === undefined) {
      const error = new Error();
      error.status = 400;
      error.message =
        'La tarea debe tener title y description en su estructura';
      return error;
    }

    return await this.repository.create(entity);
  }

  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = 'Se debe enviar el id como parametro';
      return error;
    }

    if (id.length !== 24) {
      const error = new Error();
      error.status = 400;
      error.message = 'El id debe ser en formato Id de MongoDb';
      return error;
    }

    const currentEntity = await this.repository.getById(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = 'Entidad no encontrada!';
      return error;
    }

    return await this.repository.delete(id);
  }
}

module.exports = TaskService;
