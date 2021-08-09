import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../config/colors';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);

  return (
    <View style={styles.container}>
      <Icon name="hipchat" size={90} color={colors.black} />
      <Text style={styles.text}>Welcome to ChatApps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    color: colors.black,
  },
});
