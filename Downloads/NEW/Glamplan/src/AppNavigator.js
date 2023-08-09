import React from 'react';
import { Button, View } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import ChooseLanguageScreen from './screens/ChooseLanguageScreen';
import RoleScreen from './screens/RoleScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Sign In" component={SignInScreen}  options={({ navigation }) => ({ 
           headerBackTitleVisible: false, 
           headerTransparent: true, 
           headerTintColor: 'white',
           headerTitle: '', 
           headerLeft: (props) => (
              <View style={{ paddingLeft: 25 }}>
                <HeaderBackButton 
                  {...props}
                  tintColor='white' 
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
         })}/>
      <Stack.Screen name="Choose Language" component={ChooseLanguageScreen} options={({ navigation }) => ({ 
           headerBackTitleVisible: false, 
           headerTransparent: true, 
           headerTintColor: 'white',
           headerTitle: '', 
           headerLeft: (props) => (
              <View style={{ paddingLeft: 25 }}>
                <HeaderBackButton 
                  {...props}
                  tintColor='black' 
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
         })}/>
      <Stack.Screen name="RoleScreen" component={RoleScreen} options={({ navigation }) => ({ 
           headerBackTitleVisible: false, 
           headerTransparent: true, 
           headerTintColor: 'white',
           headerTitle: '', 
           headerLeft: (props) => (
              <View style={{ paddingLeft: 25 }}>
                <HeaderBackButton 
                  {...props}
                  tintColor='black' 
                  onPress={() => navigation.goBack()}
                />
              </View>
            ),
         })}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
