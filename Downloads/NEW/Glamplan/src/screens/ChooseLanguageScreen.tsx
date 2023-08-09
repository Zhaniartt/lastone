import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import DeviceInfo from 'react-native-device-info';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import { changeLanguage } from '../i18';

const tablet = DeviceInfo.isTablet();

type RootStackParamList = {
  ChooseLanguageScreen: undefined;
  RoleScreen: undefined;
};

type ChooseLanguageScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ChooseLanguageScreen'>;
}

const ChooseLanguageScreen: React.FC<ChooseLanguageScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();

  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
    navigation.navigate('RoleScreen');
  };

  return (
    <LinearGradient 
    colors={['#e8e3d8', '#7e847a']}
    start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}
    style={styles.wrapper}
  >
    <View style={styles.titleContainer}>
        <CustomText style={styles.title}>{t('chooseLanguageHeader')}</CustomText>
    </View>

    <View style={styles.buttonContainer}>
  <CustomButton buttonStyle={styles.button} buttonTextStyle={styles.buttonText} title={'English'} onPress={() => handleLanguageChange('en')} />
  <CustomButton buttonStyle={styles.button} buttonTextStyle={styles.buttonText} title={'Deutsch'} onPress={() => handleLanguageChange('de')} />
  <CustomButton buttonStyle={styles.button} buttonTextStyle={styles.buttonText} title={'Български'} onPress={() => handleLanguageChange('bg')} />
  <CustomButton buttonStyle={styles.button} buttonTextStyle={styles.buttonText} title={'Руский'} onPress={() => handleLanguageChange('ru')} />
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
    title:{
      ...(tablet ? { fontSize: 40 } : { fontSize: 26 }), 
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      buttonContainer: {
        flex: 3,
        justifyContent: 'center',
      },
      button: {
        marginBottom: 30,
        ...(tablet ? { width: 210, height: 70 } : { width: 160 }), 
      },
      buttonText: {
        color: 'white',
        ...(tablet ? { fontSize: 28 } : { fontSize: 18 }), 
        padding:5
      }
  });

export default ChooseLanguageScreen