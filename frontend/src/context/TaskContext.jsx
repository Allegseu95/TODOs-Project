import { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const uri = 'https://todos-api-alex.herokuapp.com/api/tasks/';

  const fetchData = async () => {
    let res = await fetch(uri);
    let data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createTask = async (newTask) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    };

    await fetch(uri, requestOptions);

    fetchData();
  };

  const deleteTask = async (idTask) => {
    await fetch(`${uri}${idTask}`, {
      method: 'DELETE',
    });
    fetchData();
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
