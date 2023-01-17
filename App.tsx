import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
const StackNavigation = createNativeStackNavigator<RootStackParamList>();
export default function App() {


  return (
    <NavigationContainer>
      <StackNavigation.Navigator initialRouteName="Home">
        <StackNavigation.Screen name="Home" component={HomeScreen} />
        <StackNavigation.Screen name="Profile" component={ProfileScreen} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}
