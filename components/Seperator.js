import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

export default function Seperator() {
  return (
    <View
      style={{
        width: '100%',
        borderBottomColor: colors.black,
        borderWidth: 0.5,
      }}></View>
  );
}

const styles = StyleSheet.create({});
