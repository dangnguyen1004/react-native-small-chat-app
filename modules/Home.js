import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RandomButton from './RandomButton';

export default function Home() {
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <RandomButton onPress={handlePress} title="Press di ne"></RandomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
