import { TaskContextProvider } from './src/context/TaskContext';
import Main from './src/components/Main';

export default function App() {
  return (
    <TaskContextProvider>
      <Main />
    </TaskContextProvider>
  );
}
