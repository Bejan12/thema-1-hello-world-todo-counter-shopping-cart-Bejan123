import React, { useState } from 'react';
import { View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import styles from './styles';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { key: Math.random().toString(), value: task, completed: false }]);
  };

  const markTaskComplete = (taskKey) => {
    setTasks(tasks.map(task => task.key === taskKey ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (taskKey) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onMarkComplete={markTaskComplete} onRemoveTask={removeTask} />
      </View>
    </View>
  );
}