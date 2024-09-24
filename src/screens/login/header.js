import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import background from '../../assets/images/backgroundimg2.png';
import logo from '../../assets/images/logo2.png';
import arrowup from '../../assets/images/arrowup.png';
import watch from '../../assets/images/watch.png';
import jar from '../../assets/images/jar.png';

class BackgroundImage extends Component {
  render() {
    return (
      <ImageBackground source={background} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.cont}>
            <Image source={logo} style={styles.image1} />
            <View style={styles.texts}>
              <Text style={styles.text4}>QUIVIO</Text>
              <Text style={styles.text2}>Your Personal CarWash Assistant</Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.box}>
              <View style={styles.item}>
                <Image source={arrowup} style={styles.image} />
                <Text style={styles.text}>Aesthetical{'\n'}Graphics</Text>
              </View>
              <View style={styles.item}>
                <Image source={watch} style={styles.image} />
                <Text style={styles.text}>Real time{'\n'}statistics</Text>
              </View>
              <View style={styles.item}>
                <Image source={jar} style={styles.image} />
                <Text style={styles.text}>Track equipment{'\n'}usage</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 0.85,

  },
  scrollViewContent: {
    paddingHorizontal: 35,
  },

  box: {
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  image1: {
    marginTop: 10,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  texts: {
    marginTop: 20,
  },
  image: {
    width: 16,
    height: 16,
    marginTop: 50,
    marginRight: 10,
  },
  cont: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  text: {
    marginTop: 35,
    color: 'white',
    fontSize: 14,
  },
  text1: {
    color: 'white',
    fontSize: 12,
    marginRight: 25,
  },
  text2: {
    color: '#F8F9F9',
    fontFamily: 'Montserrat',
    fontSize: 17,
    fontWeight: '400',
    marginTop: 5,
  },
  text4: {
    color: '#F8F9F9',
    fontFamily: 'Montserrat',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default BackgroundImage;
