/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from './src/screens/splash';
import Navigation from './src/navigator/Navigation';





function App(): React.JSX.Element {
  

  return (
    <View style={{flex:1}}>
      <Navigation />
    </View>
  );
}


export default App;
