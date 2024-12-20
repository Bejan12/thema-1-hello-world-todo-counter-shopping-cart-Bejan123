import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function TaskList({ tasks, onMarkComplete, onRemoveTask }) {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <View style={styles.taskContainer}>
          <Text style={item.completed ? styles.completedTask : styles.task}>{item.value}</Text>
          <TouchableOpacity onPress={() => onMarkComplete(item.key)}>
            <Text style={styles.completeButton}>{item.completed ? 'Undo' : 'Complete'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRemoveTask(item.key)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}