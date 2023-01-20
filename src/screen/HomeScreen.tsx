import {Button, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Props} from '../constant/Interface';
import {ScrollView} from 'react-native-gesture-handler';

export default function HomeScreen({navigation}: Props) {
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: 'lightgray',
          height: 120,
          marginTop: 10,
          borderRadius: 10,
        }}></View>

      {/* All Product */}
      <View>
        <ScrollView horizontal={true}>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
          <Text style={{width: 20}}>cdc</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
