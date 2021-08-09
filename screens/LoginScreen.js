import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import drawables from '../config/drawables';
import AppInput from '../components/AppInput';

export default function LoginScreen({navigation}) {
  const handleLogin = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text style={{fontSize: 20}}>Welcome Back to</Text>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>ChatApps</Text>
      <Image style={styles.logo} source={drawables.logoSource} />
      <Text>Please enter your account information</Text>
      <AppInput style={{marginBottom: 10, marginTop: 10,}} placeholder='Account' />
      <AppInput style={{marginBottom: 20}} placeholder='Password'  secureTextEntry/>
      <AppButton title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 30,
  },
  logo: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});
