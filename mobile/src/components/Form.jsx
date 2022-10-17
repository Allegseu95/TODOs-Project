import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';

const Form = () => {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const saveTask = () => {
    if (title === '' || description === '') {
      alert('Debes llenar todos los campos');
      return;
    }

    createTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registra una Tarea</Text>
      <TextInput
        style={styles.input}
        placeholder="Titulo de la tarea"
        onChangeText={setTitle}
        value={title}
        autoFocus
      />
      <TextInput
        multiline
        numberOfLines={5}
        style={styles.inputMultiline}
        onChangeText={setDescription}
        value={description}
        placeholder="Escriba una breve descripcion de la tarea"
      />

      <View style={styles.btn}>
        <Button
          title="Agregar Tarea"
          color="dodgerblue"
          onPress={() => {
            saveTask();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    padding: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputMultiline: {
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  btn: {
    marginHorizontal: 12,
  },
});

export default Form;
