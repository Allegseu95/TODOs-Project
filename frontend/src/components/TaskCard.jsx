import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { MdDelete } from 'react-icons/md';

function TaskCard({ element }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-teal-500 drop-shadow-xl p-2 flex flex-col gap-2 items-center justify-between rounded-lg h-max ">
      <h1 className="font-bold break-all">{element.title}</h1>
      <p className="break-all">{element.description}</p>
      <button
        className="bg-red-600 font-semibold text-white p-2 rounded inline-flex justify-center items-center"
        onClick={() => deleteTask(element._id)}
      >
        Eliminar Tarea
        <MdDelete className="ml-1" />
      </button>
    </div>
  );
}

export default TaskCard;
