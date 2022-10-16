import { useContext } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="font-bold text-2xl col-span-4">
        Lista de tareas vacia! Empieza creando una nueva.
      </h1>
    );
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task._id} element={task} />
      ))}
    </>
  );
};

export default TaskList;
