import {BackHandler, Button, Text, View} from 'react-native';
import React from 'react';
import {Props} from '../constant/Interface';

export default function HomeScreen({navigation}: Props) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile', {userId: ''})}
      />
    </View>
  );
}
