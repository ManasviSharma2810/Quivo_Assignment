import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from '../screens/splash';
import TutorialScreen from '../screens/tutorial';
import Login from '../screens/login'
import ForgotScreen from '../screens/forgot';
import ResetPassword from '../screens/reset';
import HomeScreen from '../screens/home';
import BottomTab from '../screens/home/bottom_tab';
import VerifyAccountAccess from '../screens/verify';
import AddPhoneNumber from '../screens/home/fav';

const Stack = createNativeStackNavigator();
export class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
      
          {/* <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/> */}
          {/* <Stack.Screen name="Tutorial" component={TutorialScreen}options={{headerShown: false}} /> */}
          {/* <Stack.Screen name="Login" component={Login}options={{headerShown: false}} /> */}
          {/* <Stack.Screen name="Forgot" component={ForgotScreen}options={{headerShown: false}} /> */}
          {/* <Stack.Screen name="Reset" component={ResetPassword}options={{headerShown: false}} /> */}
          <Stack.Screen name="Home" component={BottomTab}options={{headerShown: false}} />
          {/* <Stack.Screen name="Verify" component={VerifyAccountAccess}options={{headerShown: false}} /> */}
          {/* <Stack.Screen name="PhoneNumber" component={AddPhoneNumber}options={{headerShown: false}} /> */}
 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
