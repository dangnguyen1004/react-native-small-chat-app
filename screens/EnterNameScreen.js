import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import FormInput from '../components/FormInput';

export default function EnterNameScreen({navigation}) {
  const [name, setName] = useState('');

  const handleEnter = () => {
    if (name) {
      navigation.navigate('Chat', {name: name});
    }
  };

  return (
    <View style={styles.container}>
      <FormInput onChange={text => setName(text)} />
      <View style={{marginVertical: 10}}></View>
      <Button onPress={handleEnter} title="Enter Room" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
});
