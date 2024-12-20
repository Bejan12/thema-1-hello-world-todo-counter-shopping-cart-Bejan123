// components/MainScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import CartItem from './CartItem';
import { styles } from '../styles/styles';

export default function MainScreen() {
  const [cartItems, setCartItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItemToCart = () => {
    if (itemName && itemPrice) {
      setCartItems([...cartItems, { id: Date.now().toString(), name: itemName, price: parseFloat(itemPrice) }]);
      setItemName('');
      setItemPrice('');
    }
  };

  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>
      <Text style={styles.total}>Total: €{totalPrice.toFixed(2)}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />
        <TextInput
          style={styles.input}
          placeholder="Item Price"
          value={itemPrice}
          onChangeText={setItemPrice}
          keyboardType="numeric"
        />
        <Button title="Add Item" onPress={addItemToCart} />
      </View>
      <Button title="Clear Cart" onPress={clearCart} />
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} onRemove={removeItemFromCart} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}