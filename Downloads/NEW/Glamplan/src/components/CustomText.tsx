import React from 'react';
import { Text, StyleProp, TextStyle, GestureResponderEvent } from 'react-native';

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  fontFamily?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomText: React.FC<Props> = ({ style, children, fontFamily = 'Oswald-Regular', onPress }) => (
  <Text style={[{ fontFamily }, style]} onPress={onPress}>
    {children}
  </Text>
);

export default CustomText;
