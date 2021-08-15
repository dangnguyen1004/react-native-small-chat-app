import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function SendButton({size, color, name, onPress}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Feather name={name} size={size} color={color} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({});
