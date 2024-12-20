import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles';

const CustomInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      keyboardType="numeric"
    />
  );
};

export default CustomInput;