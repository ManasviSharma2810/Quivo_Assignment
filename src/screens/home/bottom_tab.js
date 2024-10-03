import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../login';
import HomeScreen from '.';
import home from '../../assets/images/home.png'
import person from '../../assets/images/person.png'
import menu from '../../assets/images/menu.png'
import star from '../../assets/images/star.png'
import Fav from './fav';
import Menu from './menu';
import AddPhoneNumber from './fav';

Tab = createBottomTabNavigator();
export default class BottomTab extends React.Component {
  constructor({navigation}) {
    super();
  }
  handleNavigation = () => {
    this.props.navigation.navigate('Login');
    this.props.navigation.reset({
        index:0,
        routes: [{name: 'Login'}]
    })
  }
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'HOME',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image style={{width: size, height: size}} source={home} />
              );
            },
          }}
        />
          <Tab.Screen
          name="LoginScreen"
          component={Login}
          options={({navigation}) => ({
            title: 'Account',
            tabBarIcon: (props) => (
              <TouchableOpacity onPress={this.handleNavigation}>
                <Image style={{width: 25, height: 25}} source={person} />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Fav"
          component={AddPhoneNumber}
          options={{
            title: 'FAVORITES',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image style={{width: size, height: size}} source={star} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'PROFILE',
            tabBarIcon: ({size, focused, color}) => {
              return <Image style={{width: size, height: size}} source={menu} />;
            },
          }}
        />
        
      

        {/* <Tab.Screen name="Login" component={LoginScreen} /> */}
      </Tab.Navigator>
    );
  }
}
