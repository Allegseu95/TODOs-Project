import React, { useContext } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ element }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <View key={element._id} style={styles.container}>
      <Text style={styles.title}>{element.title}</Text>
      <Text style={styles.description}>{element.description}</Text>

      <Button
        title="Eliminar Tarea"
        color="red"
        onPress={() => {
          deleteTask(element._id);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightblue',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    padding: 5,
  },
  description: {
    padding: 5,
  },
});

export default TaskItem;
