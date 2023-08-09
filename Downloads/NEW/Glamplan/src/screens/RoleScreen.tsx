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
RoleScreen: undefined;
  SignUpScreen: undefined;
};

type RoleScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'RoleScreen'>;
}

const tablet = DeviceInfo.isTablet();

const RoleScreen: React.FC<RoleScreenProps> = ({ navigation }) => {
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
    <View style={styles.titleContainer}>
        <CustomText style={styles.title}>{t('roleTextHeader')}</CustomText>
    </View>

    <View style={styles.buttonContainer}>
  <CustomButton buttonStyle={styles.button} buttonTextStyle={styles.buttonText} title={t('owner')} onPress={() => handleLanguageChange('en')} />
  <CustomButton buttonStyle={styles.button} buttonTextStyle={styles.buttonText} title={t('client')} onPress={() => handleLanguageChange('de')} />
  <CustomButton buttonStyle={styles.button} buttonTextStyle={styles.buttonText} title={t('teamMember')} onPress={() => handleLanguageChange('bg')} />
    </View>
  </LinearGradient>
  )
}


const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      title:{
        ...(tablet ? { fontSize: 40 } : { fontSize: 26 }), 
      },
      buttonContainer: {
        flex: 3,
        justifyContent: 'center',
      },
      button: {
        marginBottom: 30,
        ...(tablet ? { width: 340, height: 70 } : { width: 240 }), 
      },
      buttonText: {
        color: 'white',
        ...(tablet ? { fontSize: 28 } : { fontSize: 18 }), 
        padding:5
      }
  });

export default RoleScreen