import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function BorderButton({style, onPress, title = 'Button', color = '#fff', ...otherProps}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]} {...otherProps}>
      <Text style={[styles.text, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
