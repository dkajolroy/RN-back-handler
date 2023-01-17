import {  BackHandler, Button, Text, View } from "react-native";
import React from 'react';
import { useFocusEffect } from "@react-navigation/native";


export default function HomeScreen({navigation}) {


  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
       console.log("OK")
          return false;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [])
  );

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Profile" onPress={()=>navigation.navigate("Profile")} />
    </View>
  )
}
