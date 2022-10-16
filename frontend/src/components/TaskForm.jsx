import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { FaPen } from 'react-icons/fa';

const TaskForm = () => {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === '' || description === '') {
      alert('Debe llenar todos los campos para hacer el registro');
      return;
    }

    createTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form
      className="bg-teal-900 shadow-md rounded p-3 flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-white font-bold">Nueva Tarea</h1>

      <input
        className="shadow appearance-none border rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Titulo de la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />

      <textarea
        className="shadow appearance-none border rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        cols="30"
        rows="5"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escribe una breve descripción de la tarea"
        value={description}
      ></textarea>
      <button className="bg-blue-500 font-semibold text-white p-2 rounded inline-flex justify-center items-center">
        Registrar Tarea
        <FaPen className="ml-2" />
      </button>
    </form>
  );
};

export default TaskForm;
