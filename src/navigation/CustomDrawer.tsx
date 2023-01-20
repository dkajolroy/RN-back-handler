import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const CustomDrawer = (Props: DrawerContentComponentProps) => {
  const {navigation} = Props;
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            marginVertical: 10,
            width: width / 4,
            height: width / 4,
            backgroundColor: 'lightgrey',
            borderRadius: width / 4,
          }}></View>
        <Text>Username</Text>
      </View>

      {/* All Button */}
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: 'lightgrey',
            padding: 5,
            borderRadius: 5,
            marginVertical: 5,
          }}>
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            backgroundColor: 'lightgrey',
            padding: 5,
            borderRadius: 5,
            marginVertical: 5,
          }}>
          <Text>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'lightgrey',
            padding: 5,
            borderRadius: 5,
            marginVertical: 5,
          }}>
          <Text>Setting</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'lightgrey',
            padding: 5,
            borderRadius: 5,
            marginVertical: 5,
          }}>
          <Text>Updates</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'lightgrey',
            padding: 5,
            borderRadius: 5,
            marginVertical: 5,
          }}>
          <Text>V1.0.0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
