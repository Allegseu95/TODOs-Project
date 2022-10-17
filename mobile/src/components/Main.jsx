import React from 'react';
import { View } from 'react-native';
import AppBar from './AppBar';
import Form from './Form';
import TaskList from './TaskList';

const Main = () => {
  return (
    <View>
      <AppBar />
      <Form />
      <TaskList />
    </View>
  );
};

export default Main;
