import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MoreButton from '../components/MoreButton';
import Seperator from '../components/Seperator';
import colors from '../config/colors';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <MoreButton></MoreButton>
  </View>
);


export default function HomeScreen() {
  const FRIENDS = [
    {id: 1, name: 'Spider man'},
    {id: 2, name: 'Captain America'},
    {id: 3, name: 'Black Widow'},
    {id: 4, name: 'Thor'},
    {id: 5, name: 'Hulk'},
    {id: 6, name: 'Iron Man'},
    {id: 7, name: 'Vision'},
    {id: 8, name: 'Wanda'},
    {id: 9, name: 'Wanda'},
    {id: 10, name: 'Wanda'},
    {id: 11, name: 'Wanda'},
    {id: 12, name: 'Wanda'},
    {id: 13, name: 'Wanda'},
    {id: 14, name: 'Wanda'},
    {id: 15, name: 'Wanda'},
    {id: 16, name: 'Wanda'},
    {id: 17, name: 'Wanda'},
    {id: 18, name: 'Wanda'},
  ];

  const renderItem = ({item}) => <Item title={item.name} />;

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <Seperator/>}
        style={{width: '100%'}}
        data={FRIENDS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  item: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  title: {
    fontSize: 20,
  },
});
