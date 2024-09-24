import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const {width} = Dimensions.get('window');

class TutorialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isVisited: true,
    };
    this.scrollViewRef = React.createRef();
    this.autoScrollTimeout = null;
    this.screens = [
      {
        icon: 'https://cdn3.vectorstock.com/i/1000x1000/38/62/study-element-cartoon-vector-23303862.jpg',
        description: 'Welcome!!!',
      },
      {
        icon: 'https://cdn3.vectorstock.com/i/1000x1000/38/62/study-element-cartoon-vector-23303862.jpg',
        description: ' Wait for Swipe',
      },
      {
        icon: 'https://cdn3.vectorstock.com/i/1000x1000/38/62/study-element-cartoon-vector-23303862.jpg',
        description: 'That’s it! You are ready to go!',
      },
    ];
  }

  componentDidMount = async () => {
    this.startAutoScroll();
    await AsyncStorage.setItem('isVisited', 'false');
  };

  componentWillUnmount() {
    this.clearAutoScroll();
  }

  handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    this.setState({currentIndex: index});
    this.clearAutoScroll();
    this.startAutoScroll();
  };

  goToNextPage = () => {
    const {currentIndex} = this.state;
    if (currentIndex < this.screens.length - 1) {
      this.scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
      this.setState({currentIndex: currentIndex + 1});
    } else {
      this.scrollViewRef.current.scrollTo({x: 0, animated: true});
      this.setState({currentIndex: 0});
    }
  };

  startAutoScroll = () => {
    this.autoScrollTimeout = setTimeout(() => {
      this.goToNextPage();
    }, 5000);
  };

  clearAutoScroll = () => {
    if (this.autoScrollTimeout) {
      clearTimeout(this.autoScrollTimeout);
    }
  };

  //   handelNavigation=()=>{
  //     this.props.navigation.navigate('Login')
  //   }

  render() {
    const {currentIndex} = this.state;
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          ref={this.scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}>
          {this.screens.map((screen, index) => (
            <View key={index} style={styles.screen}>
              <Image source={{uri: screen.icon}} style={styles.imgStyle} />
              <Text style={styles.description}>{screen.description}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.dotContainer}>
          {this.screens.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              this.props.navigation.navigate('Login');
              this.props.navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'Login',
                  },
                ],
              });
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => {
              this.props.navigation.navigate('Register');
              this.props.navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'Register',
                  },
                ],
              });
            }}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TutorialScreen;
