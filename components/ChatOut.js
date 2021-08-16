import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

export default function ChatOut({message}) {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={{color: colors.grey}}>{message.name}</Text>
        <Text style={styles.text}>{message.message}</Text>
        <Text style={{color: colors.grey}}>{message.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  message: {
    backgroundColor: colors.medium,
    padding: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  text: {
    fontSize: 19,
    marginBottom: 20,
    color: colors.white,
    marginTop: 10,
  },
});
