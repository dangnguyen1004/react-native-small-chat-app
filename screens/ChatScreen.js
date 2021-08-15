import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ChatIn from '../components/ChatIn';
import ChatOut from '../components/ChatOut';
import ChatSend from '../components/ChatSend';
import colors from '../config/colors';
import io from 'socket.io-client';
import {useState} from 'react';
import {useEffect} from 'react';
import {AutoScrollFlatList} from 'react-native-autoscroll-flatlist';

const socket = io('http://192.168.180.123:3000');

export default function ChatScreen({route}) {
  const [messages, setMessages] = useState([]);
  const {name} = route.params;

  const handleSend = message => {
    socket.emit('chat message', {message, name});
  };

  useEffect(() => {
    socket.on('chat message', msg => {
      const newMessages = [...messages, msg];
      setMessages(newMessages);
    });
  });

  const renderItem = ({item}) => (
    <React.Fragment key={item.message}>
      {item.name === name ? (
        <ChatOut message={item.message} />
      ) : (
        <ChatIn message={item.message} />
      )}
    </React.Fragment>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <AntDesign name="left" size={30} color={colors.white} />
        <Text style={styles.title}>Chat app</Text>
        <Feather name="more-vertical" size={30} color={colors.white} />
      </View>
      <AutoScrollFlatList
        threshold={20}
        style={styles.messagesContainer}
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.message}
      />
      <ChatSend onSendMessage={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.grey,
  },
  headerBar: {
    paddingHorizontal: 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 25,
    color: colors.white,
  },
  messagesContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
});
