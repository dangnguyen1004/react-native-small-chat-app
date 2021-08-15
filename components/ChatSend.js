import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';
import FormInput from './FormInput';
import SendButton from './SendButton';

export default function ChatSend({onSendMessage}) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message) {
      onSendMessage && onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <FormInput value={message} onChange={text => setMessage(text)} />
      </View>
      <SendButton
        name="send"
        size={30}
        color={colors.white}
        onPress={handleSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    backgroundColor: colors.medium,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
  },
  input: {
    marginRight: 15,
    flex: 1,
  },
});
