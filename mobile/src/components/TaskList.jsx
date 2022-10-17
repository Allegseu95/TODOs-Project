import React, { useContext } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <Text style={styles.text}>
        Lista de tareas vacia! Empieza creando una nueva.
      </Text>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={tasks}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: task }) => <TaskItem element={task} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    height: 490,
  },
  text: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default TaskList;
