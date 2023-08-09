import React, { useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { useTranslation } from 'react-i18next';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import axios from 'axios';

const tablet = DeviceInfo.isTablet();

const SignInScreen: React.FC = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      // Validate inputs
      if (!email.trim() || !password.trim()) {
        alert('Please fill in all fields.');
        return;
      }

      // Send sign-in request
      const res = await axios.post('http://localhost:3000/auth/login', { email, password });
      console.log(res.data);

      // Handle sign-in success, you can redirect to another screen here
    } catch (err) {
      // Handle sign-in error
      console.log(err);
      alert('An error occurred during sign in.');
    }
  };

  const googleSignIn = async () => {
    console.log('here')
  };

  return (
    <View style={styles.wrapper}>
      <Image source={require('../../assets/Glamplan.png')} style={styles.logo} resizeMode="contain" />
      <View style={{justifyContent: 'center', alignItems:'center'}}>
        <TextInput
          placeholder='Email'
          onChangeText={text => setEmail(text)}
          value={email}
          placeholderTextColor="gray"
          autoCapitalize="none"
          style={styles.emailInput}
        />
        <TextInput
          placeholder='Password'
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          placeholderTextColor="gray"
          style={styles.passwordInput}
        />
        <CustomButton title={t('signInButton')}
        onPress={signIn} 
        buttonStyle={styles.signInButton} 
        buttonTextStyle={styles.signInText}
        />
        <CustomButton
            title="Sign In with Google"
            onPress={googleSignIn}
            iconSource={require('../../assets/icons/google.png')}
            buttonStyle={styles.googleSignInLink}
            buttonTextStyle={styles.googleSignInText}
            />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#212121',
    padding: 16,
    justifyContent:'space-around'
  },
  logo: {
    ...(tablet ? { height: 300 } : { height: 100 }),
    alignSelf: 'center',
  },
  emailInput: {
    width: '60%',
    ...(tablet ? { height: 70 } : { height: 50 }),
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  passwordInput: {
    width: '60%',
    ...(tablet ? { height: 70 } : { height: 50 }),
    backgroundColor: 'white',
    marginTop: 10,
    paddingLeft: 10,
  },
  signInButton:{
    backgroundColor: 'white',
    marginTop: 20,
    ...(tablet ? { width: 160 } : { width: 120 }), 
  },
  googleSignInLink:{
    backgroundColor:'transparent', 
    marginTop: 10
  },
  signInText: {
    color: 'black', 
    ...(tablet ? { fontSize: 25 } : { fontSize: 16 }), 
  },
  googleSignInText: {
    ...(tablet ? { fontSize: 20 } : { fontSize: 12 }), 
    color: 'white', 
    textDecorationLine: 'underline' 
  }
});

export default SignInScreen;
