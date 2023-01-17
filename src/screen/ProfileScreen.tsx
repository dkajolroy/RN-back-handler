import {useFocusEffect} from '@react-navigation/native';
import {BackHandler, Text, View} from 'react-native';
import {Props} from '../constant/Interface';
import * as React from 'react';

export default function ProfileScreen({navigation}: Props) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        console.log('Done');
        return false;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
