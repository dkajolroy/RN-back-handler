import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {onPressType} from '../constant/Interface';

export default function Button(props: onPressType) {
  const {onPress, title} = props;
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'red' : 'blue',
        },
      ]}
      onPressIn={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
