import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

export default function ChatIn({message}) {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.text}>{message}</Text>
        <Text>18:31</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 5,
    },
    message: {
        backgroundColor: colors.white,
        padding: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    text: {
        fontSize: 19,
        marginBottom: 20,
    }
});