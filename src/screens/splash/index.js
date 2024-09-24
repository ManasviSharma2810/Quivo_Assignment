import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,Dimensions} from 'react-native'
import logo from '../../assets/images/logo.png'
import above from '../../assets/images/aboveDesign.png'
import TutorialScreen from '../tutorial';
import backgroundImage from '../../assets/images/image.png'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isSplash: true,
        };
      }
      componentDidMount(){
        // const isVisited= await AsyncStorage.getItem('isVisited')
        // const isLogin = await AsyncStorage.getItem('isLogin')
        // console.log(isVisited);
        // componentDidMount= async() =>{
        //   const isVisited= await AsyncStorage.getItem('isVisited')
        //   const isLogin = await AsyncStorage.getItem('isLogin')
        //   // console.log(isVisited);
          
        //   setTimeout(() => {
        //     if(!isVisited){
        //       this.setState({isSplash: false});
        //       this.props.navigation.navigate('Tutorial')
        //     }
        //     else{
        //       this.props.navigation.navigate('Login')
        //     }
           
        //   }, 3000);
        // }
        setTimeout(() => {
             this.setState({isSplash: false});
            this.props.navigation.navigate('Tutorial')
        }, 3000);
      }
    
      render() {
        // console.log("props",this.props)
        if (this.state.isSplash){
          return (
            <View style={styles.splashStyle}>
                <Image style={styles.backgroundImage} source={backgroundImage}/>
                <Image source={logo} style={styles.image} />
            </View>
          );
        }
       
      }
    }

const styles = StyleSheet.create({
    splashStyle: {

        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight,
        width: windowWidth,

      },
      backgroundImage:{
        height: windowHeight,
        width:windowWidth
        // position:'absolute'
        // backgroundColor: "red"
      },
      image: {
        position:'absolute',
        resizeMode: 'contain',
        
        
      },
})
