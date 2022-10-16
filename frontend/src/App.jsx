import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Title from './components/Title';

const App = () => {
  return (
    <div className="bg-gray-300  min-h-screen">
      <div className="grid grid-cols-12 gap-4 p-8 ">
        <div className="col-span-12">
          <Title />
        </div>

        <div className="col-span-3 p-2 ">
          <TaskForm />
        </div>

        <div className="col-span-9 p-2 grid grid-cols-4 gap-4">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default App;
