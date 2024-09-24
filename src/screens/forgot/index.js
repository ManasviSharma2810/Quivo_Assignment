import React, {Component} from 'react';
import {Text, View, Image, Modal, TouchableOpacity} from 'react-native';
import styles from './style';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import point from '../../assets/images/point.png';
import emailforgot from '../../assets/images/email.png';
import toast from '../../assets/images/toastIcon.png';
import { Images } from '../../assets';
export class ForgotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      errorMessage: '',
      isEmailValid: true,
      showErrorPopup: false,
      popupMessage: '',
      showSuccessModal: false, 
    };
  }

  handleUsernameChange = text => {
    this.setState({username: text, errorMessage: '', isEmailValid: true});
  };

  validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  showErrorPopup = message => {
    this.setState({popupMessage: message, showErrorPopup: true});
    setTimeout(() => {
      this.setState({showErrorPopup: false});
    }, 3000); 
  };

  handlePress = () => {
    const {username} = this.state;
    if (!username.trim()) {
      this.setState({isEmailValid: false});
      this.showErrorPopup('Email not found. Contact admin.');
      return;
    }
    if (!this.validateEmail(username)) {
      this.setState({isEmailValid: false});
      this.showErrorPopup('Please enter a valid email address');
      return;
    }
    this.setState({showSuccessModal: true});
  };

  handleCloseModalAndNavigate = () => {
    this.setState({showSuccessModal: false}, () => {
      this.props.navigation.navigate('Reset'); 
    });
  };

  render() {
    const {isEmailValid, showErrorPopup, popupMessage, showSuccessModal} = this.state; // Destructure state

    return (
      <View style={styles.container}>
        {/* Error Popup */}
        {showErrorPopup && (
          <View style={styles.popupContainer}>
            <View style={styles.viewStyle}>
              <Image source={toast} style={styles.toastIcon} />
              <Text style={styles.popupText}>{popupMessage}</Text>
            </View>
          </View>
        )}

        {/* Success Modal */}
        <Modal
          transparent={true}
          visible={showSuccessModal}
          animationType="fade"
          onRequestClose={() => this.setState({showSuccessModal: false})}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={Images.point} style={styles.pointStyle} />
              <Text style={styles.modalTextLinksent}>Link Sent!</Text>
              <Text style={styles.modalText}>
                A password reset link has been sent to your email.
              </Text>
              
                <CustomButton
                  title="Reset Password"
                  onPress={this.handleCloseModalAndNavigate}
                  buttonStyle={{backgroundColor: '#2A7BBB', marginTop: 10, marginBottom: 10}}
                />
              
            </View>
          </View>
        </Modal>

        {/* Forgot Password Form */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Image style={styles.arrowStyle} source={Images.backArrow} />
          </TouchableOpacity>

          <Text style={styles.forgotStyle}>Forgot Password</Text>
          <Text style={styles.textStyle}>
            Reset your password with just a few clicks
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <CustomTextInput
            placeholder="Email Address"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            Animation={true}
            
            inputStyle={[
              styles.textInputStyle2,
              !isEmailValid && styles.invalidInput,
            ]}
          />
          <Image
            source={emailforgot}
            style={[
              styles.emailIcon,
              {tintColor: !isEmailValid ? 'red' : 'lightblue'}, 
            ]}
          />
          {this.state.errorMessage ? (
            <Text style={styles.errorText}>{this.state.errorMessage}</Text>
          ) : null}
        </View>

        <View style={styles.btnView}>
        <CustomButton
          title="Send Link"
          onPress={this.handlePress}
          buttonStyle={{backgroundColor: 'lightblue'}}
          textStyle={{fontSize: 18}}
        />
        </View>
      </View>
    );
  }
}

export default ForgotScreen;
