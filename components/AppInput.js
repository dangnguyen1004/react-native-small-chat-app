import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../config/colors';

export default function AppInput({style, onChange, ...otherProps}) {
  const handleChange = text => {
    onChange && onChange(text);
  };


  return (
    <TextInput
      style={[styles.input, style]}
      onChange={handleChange}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: colors.grey,
    paddingLeft: 20,
    borderRadius: 30,
    fontSize: 15,
  },
});
