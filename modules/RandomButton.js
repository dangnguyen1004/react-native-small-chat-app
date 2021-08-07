import React, {useState} from 'react';
import {Button, View, Dimensions} from 'react-native';

export default function RandomButton({onPress, ...otherProps}) {
  const [positionX, setPositionX] = useState(100);
  const [positionY, setPositionY] = useState(100);

  const getRandomInt = max => {
    return Math.floor(Math.random() * max);
  };

  const getRandPosX = () => {
    return getRandomInt(Math.floor(Dimensions.get('window').width) - 100);
  };

  const getRandPosY = () => {
    return getRandomInt(Math.floor(Dimensions.get('window').height) - 50);
  };

  const handlePress = () => {
    setPositionX(getRandPosX);
    setPositionY(getRandPosY);
    onPress();
  };

  return (
    <View
      style={{
        position: 'absolute',
        top: positionY,
        left: positionX,
        width: 100,
        height: 50,
      }}>
      <Button onPress={handlePress} {...otherProps}></Button>
    </View>
  );
}
