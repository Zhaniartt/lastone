import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useTranslation } from 'react-i18next';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import { changeLanguage } from '../i18';

type RootStackParamList = {
  SignUpScreen: undefined;
  SalonDetailsScreen: undefined;
};

type SignUpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SignUpScreen'>;
}

const tablet = DeviceInfo.isTablet();

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();

  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
  };

  return (
    <LinearGradient 
    colors={['#e8e3d8', '#7e847a']}
    start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}
    style={styles.wrapper}
  >
  </LinearGradient>
  )
}


const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });

export default SignUpScreen