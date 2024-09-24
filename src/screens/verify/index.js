import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from 'react-native';
import VerifyOtp from 'react-native-otp-textinput';
import back from '../../assets/images/back.png';
import toastIcon from '../../assets/images/toastIcon.png';
import modalAlert from '../../assets/images/modalAlert.png';
import CustomButton from '../../components/CustomButton';

import styles from './style';

class VerifyAccountAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationCode: '',
      predefinedCode: '123456',
      attemptsLeft: 3,
      failedAttempts: false,
      isOtpCorrect: false,
    };
    this.inputs = [];
  }

  handleCodeChange = (value, index) => {
    this.setState({verificationCode: value});
  };

  handleConfirmCode = () => {
    const {verificationCode, predefinedCode, attemptsLeft} = this.state;
    if (verificationCode === predefinedCode) {
      this.setState({isOtpCorrect: true}); // Show success modal
    } else {
      this.setState({attemptsLeft: attemptsLeft - 1}, () => {
        if (this.state.attemptsLeft > 0) {
          Alert.alert(
            'Error',
            `Incorrect code. You have ${this.state.attemptsLeft} attempts remaining.`,
          );
        } else {
          this.setState({failedAttempts: true});
        }
      });
    }
  };

  handleResendCode = () => {
    Alert.alert('Code Resent', 'A new code has been sent to your phone.');
    this.props.navigation.navigate('PhoneNumber');
  };

  closeModal = () => {
    this.setState({failedAttempts: false, attemptsLeft: 3});
  };

  closeOtpCorrectModal = () => {
    this.setState({isOtpCorrect: false});
    // this.props.navigation.navigate('HomeScreen'); // Navigate to the home screen after OTP verification
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {attemptsLeft, failedAttempts, isOtpCorrect} = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.leftIcon} onPress={this.goBack}>
          <Image source={back} style={styles.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.title}>Verify Account Access</Text>
        <Text style={styles.subtitle}>
          Enter the verification code sent to +1-788-895-5435.
        </Text>

        <VerifyOtp
          handleTextChange={this.handleCodeChange}
          inputCount={6}
          textInputStyle={this.state.attemptsLeft< 3 ?[styles.otpInput, {borderRightColor: 'red'}] :styles.otpInput}
          tintColor={'#ccc'}
          containerStyle={this.state.attemptsLeft< 3 ?[styles.Inputcontainer,{borderWidth: 1 , borderColor: 'red'}] :styles.Inputcontainer}
        />

        {attemptsLeft < 3 && (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={toastIcon}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text style={styles.errorText}>
              The code you entered is incorrect. You have {attemptsLeft}{' '}
              attempt(s) remaining.
            </Text>
          </View>
        )}

        <TouchableOpacity onPress={this.handleResendCode}>
          <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>

        <CustomButton
          title="Send Code"
          onPress={this.handleConfirmCode}
          buttonStyle={{backgroundColor: '#2A7BBB', top: 70}}
          textStyle={{fontSize: 18}}
        />

        {/* Modal for Failed Attempts */}
        <Modal
          transparent={true}
          visible={failedAttempts}
          animationType="slide"
          onRequestClose={this.closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image style={styles.lockStyle} source={modalAlert} />
              <Text style={styles.modalTextLocked}>
                Too many failed attempts
              </Text>
              <Text style={styles.modalText}>
                Your account has been locked, please try again in one hour.
              </Text>
              <CustomButton
                title="Back to login"
                onPress={this.closeModal}
                buttonStyle={{backgroundColor: '#2A7BBB'}}
              />
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          visible={isOtpCorrect}
          animationType="slide"
          onRequestClose={this.closeOtpCorrectModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image style={styles.lockStyle} source={modalAlert} />
              <Text style={styles.modalTextLocked}>OTP Verified!</Text>
              <Text style={styles.modalText}>
                Your account has been successfully verified.
              </Text>
              <CustomButton
                title="Continue"
                onPress={this.closeOtpCorrectModal}
                buttonStyle={{backgroundColor: '#2A7BBB'}}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default VerifyAccountAccess;
