import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { useTranslation } from 'react-i18next';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';

const tablet = DeviceInfo.isTablet();

const WelcomeScreen: React.FC<any> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <LinearGradient 
      colors={['#e8e3d8', '#7e847a']}
      start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}
      style={styles.wrapper}
    >
      <LottieView 
        source={require('../../assets/welcome_animation.json')} 
        style={styles.welcomeImage}
        autoPlay 
        loop={false}
      />

      <View style={styles.textWrapper}>
        <CustomText style={styles.welcomeTitle}>
          {t('welcome')}
        </CustomText>

        <CustomText style={styles.welcomeDescription}>{t('paragraph')}</CustomText>

        <View style={styles.buttonContainer}>
          <CustomButton buttonTextStyle={styles.startedButton} title={t('getStarted')} 
           onPress={() => navigation.navigate('Choose Language')}/>
        </View>

        <CustomText
         onPress={() => navigation.navigate('Sign In')}
         style={styles.signInLink}>{t('signIn')}</CustomText>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    width: '80%',
  },
  buttonContainer: {
    marginTop: 30,
    alignSelf: 'center',
    paddingBottom: 12
  },
  welcomeImage: {
    ...(tablet ? { width: 500, height: 500 } : { width: 300, height: 300  }),
  },
  welcomeTitle:{
    ...(tablet ? { fontSize: 40, textAlign: 'center', fontFamily: 'Oswald-Medium', paddingBottom: 10 } : 
    { fontSize: 20, textAlign: 'center', fontFamily: 'Oswald-Medium', paddingBottom: 10 }),
  },
  welcomeDescription: {
    ...(tablet ? { fontSize: 22, textAlign: 'center', paddingBottom: 10} :
     { fontSize: 12, textAlign: 'center', paddingBottom: 10 }),
  },
  startedButton: {
    color: 'white',
    ...(tablet ? { fontSize: 25 } : { fontSize: 16 }),
  },
  signInLink: {
    textAlign: 'center', fontFamily: 'Oswald-ExtraLight', textDecorationLine: 'underline',
    ...(tablet ? { fontSize: 20 } : { fontSize: 15 }),
  }
});

export default WelcomeScreen;
