import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';
import styles from './styles';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(number1) - parseFloat(number2);
    setResult(difference);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>CounterApp</Text>
        <CustomInput value={number1} onChangeText={setNumber1} />
        <CustomInput value={number2} onChangeText={setNumber2} />
        <CustomButton title="+" onPress={handleAddition} />
        <CustomButton title="-" onPress={handleSubtraction} />
        {result !== null && <Text style={styles.result}>Result: {result}</Text>}
      </View>
    </View>
  );
}