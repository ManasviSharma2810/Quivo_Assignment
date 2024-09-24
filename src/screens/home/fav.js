import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import back from '../../assets/images/back.png';
import toastIcon from '../../assets/images/toastIcon.png';
import CustomButton from '../../components/CustomButton';

class AddPhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countrycode: 'US',
      phoneNumber: '',
      popupMessage: '',
      showErrorPopup: false,
    };
  }

  onSelect = (country) => {
    this.setState({ countrycode: country.cca2 });
  };

  showErrorPopup = message => {
    this.setState({popupMessage: message, showErrorPopup: true});
    setTimeout(() => {
      this.setState({showErrorPopup: false});
    }, 3000); // Popup disappears after 3 seconds
  };

  validatePhoneNumber = () => {
    const { phoneNumber } = this.state;
    if (phoneNumber.length < 10) {
      this.showErrorPopup('Please enter a valid phone number.');
      return false;
    }
    return true;
  };

  handlePress = () => {
    if (this.validatePhoneNumber()) {
      // Proceed with sending the code
      // Call API or navigate to another screen
      {this.props.navigation.navigate('Verify')}
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Image style={styles.arrowStyle} source={back} />
          </TouchableOpacity>

          <Text style={styles.forgotStyle}>Add Phone Number</Text>
          <Text style={styles.textStyle}>
            To initiate the two-factor authentication, provide your phone number below.
          </Text>
        </View>
        
        {/* Input Section */}
        <PhoneInput
          defaultValue={this.state.phoneNumber}
          defaultCode={this.state.countrycode}
          layout="first"
          onChangeCountry={this.onSelect}
          onChangeText={(text) => this.setState({ phoneNumber: text })}
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.textInputContainer}
          codeTextStyle={styles.codeText}
          textInputStyle={styles.phoneText}
        />

        {/* Send Code Button */}
        <CustomButton
          title="Send Code"
          onPress={this.handlePress}
          buttonStyle={{ backgroundColor: '#2A7BBB', top: 70 }}
          textStyle={{ fontSize: 18 }}
        />

        {/* Toast (Popup) */}
        {this.state.showErrorPopup && (
          <View style={styles.popupContainer}>
            {/* <Image source={toastIcon}> </Image> */}
            <Text style={styles.popupMessage}>{this.state.popupMessage}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    top: 40,
  },
  arrowStyle: {
    height: 48,
    width: 48,
    marginBottom: 20,
  },
  forgotStyle: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 40,
  },
  textStyle: {
    color: 'grey',
    fontSize: 15,
    marginBottom: 40,
  },
  phoneInputContainer: {
    backgroundColor: '#FFF', // White background for input container
    borderRadius: 10,        // Smooth rounded corners
    borderWidth: 1,          // Thin border for container
    borderColor: '#DDD',     // Light grey border color
    paddingVertical: 12,     // Space inside the container vertically
    paddingHorizontal: 15,   // Space inside the container horizontally
    marginVertical: 15,      // Space above and below the container
    width: '100%',           
  },
  textInputContainer: {
    backgroundColor: 'transparent',  // Transparent background for input area
    paddingHorizontal: 10,           // Space between country code and phone number text
    paddingVertical: 10,             // Space within the text input area
    justifyContent: 'center',        // Centers the text inside
  },
  phoneText: {
    fontSize: 16,
    color: '#333',
  },
  popupContainer: {
    position: 'absolute',
    top: 50, // Adjust depending on where you want the toast to appear
    left: 20,
    right: 20,
    padding: 20,
    backgroundColor: '#F04438', // Error color
    borderRadius: 8,
  },
  popupMessage: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AddPhoneNumber;
