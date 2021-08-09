import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function AppButton({backgroundColor, onPress}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20
  },
  text: {
      color: '#fff',
      fontSize: 20,
  }
});
