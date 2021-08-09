import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../config/colors';
import Seperator from './Seperator';
import * as Animatable from 'react-native-animatable';

const PopupMenu = () => (
  <Animatable.View animation="bounceIn" >
    <View style={styles.container}>
      <Text style={{marginVertical: 10}}>Delete</Text>
      <Seperator></Seperator>
      <Text style={{marginVertical: 10}}>Block</Text>
    </View>
  </Animatable.View>
);

export default function MoreButton() {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
  };

  return (
    <View>
      {pressed && <PopupMenu />}
      <TouchableHighlight onPress={handlePress}>
        <Icon name="more-vertical" size={25}></Icon>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -10,
    right: 20,
    width: 100,
    backgroundColor: colors.white,
    padding: 5,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
