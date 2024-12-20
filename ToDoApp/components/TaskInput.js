import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles';

export default function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.length > 0) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nieuwe taak"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Taak toevoegen" onPress={handleAddTask} />
    </View>
  );
}