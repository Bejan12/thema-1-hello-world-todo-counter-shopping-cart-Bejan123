// components/CartItem.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/styles';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
      <Text>€{item.price.toFixed(2)}</Text>
      <Button title="Remove" onPress={() => onRemove(item.id)} />
    </View>
  );
};

export default CartItem;