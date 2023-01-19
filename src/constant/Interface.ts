import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GestureResponderEvent} from 'react-native/types';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};
export type Props = NativeStackScreenProps<RootStackParamList>;

export interface onPressType {
  onPress?: (event: GestureResponderEvent) => void;
  title?: string;
}
