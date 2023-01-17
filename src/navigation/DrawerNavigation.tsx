import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import ProfileScreen from '../screen/ProfileScreen';

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        drawerStatusBarAnimation: 'slide',
        headerShown: false,
      }}>
      <Drawer.Screen name="Stack" component={StackNavigation} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
