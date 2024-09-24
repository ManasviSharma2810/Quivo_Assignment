import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import logo3 from '../../assets/images/logo3.png';
import lock from '../../assets/images/lock.png';
import eye from '../../assets/images/eye.png';
import hide from '../../assets/images/hide.png';
import toastIcon from '../../assets/images/toastIcon.png';
import key from '../../assets/images/key.png';
import styles from './style';
import wrong from '../../assets/images/wrong.png';
import right from '../../assets/images/right.png';

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: '',
      isPasswordValid: true,
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
      errorMessage: '',
      showErrorPopup: false,
      showSuccessModal: false,
      passwordCriteria: {
        lengthValid: false,
        specialCharValid: false,
        numberValid: false,
        upperLowerValid: false,
      },
      showPasswordCriteria: false,
    };
  }

  // Function to check password strength
  checkPasswordCriteria = password => {
    const lengthValid = password.length >= 8;
    const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const numberValid = /[0-9]/.test(password);
    const upperLowerValid = /[a-z]/.test(password) && /[A-Z]/.test(password);

    this.setState({
      passwordCriteria: {
        lengthValid,
        specialCharValid,
        numberValid,
        upperLowerValid,
      },
    });
  };

  handlePasswordChange = (text, field) => {
    this.setState({
      [field]: text,
      errorMessage: '',
      isPasswordValid: true,
    });

    if (field === 'newPassword') {
      // Show password criteria when user starts typing
      if (text.length > 0) {
        this.setState({showPasswordCriteria: true});
      } else {
        this.setState({showPasswordCriteria: false});
      }

      this.checkPasswordCriteria(text);
    }
  };

  validatePasswords = () => {
    const {newPassword, confirmPassword, passwordCriteria} = this.state;

    const allCriteriaMet = Object.values(passwordCriteria).every(Boolean);

    if (!allCriteriaMet) {
      this.setState({
        isPasswordValid: false,
        errorMessage: 'Password does not meet the criteria',
      });
      return false;
    }

    if (newPassword !== confirmPassword) {
      this.setState({
        isPasswordValid: false,
        errorMessage: 'Passwords do not match',
      });
      return false;
    }

    return true;
  };

  handlePress = () => {
    if (this.validatePasswords()) {
      this.setState({showSuccessModal: true});
    } else {
      this.setState({showErrorPopup: true});
      setTimeout(() => this.setState({showErrorPopup: false}), 3000);
    }
  };

  togglePasswordVisibility = field => {
    this.setState(prevState => ({
      [field]: !prevState[field],
    }));
  };

  handleCloseModal = () => {
    this.setState({showSuccessModal: false});
  };

  render() {
    const {
      newPassword,
      confirmPassword,
      isPasswordValid,
      isPasswordVisible,
      isConfirmPasswordVisible,
      errorMessage,
      showErrorPopup,
      showSuccessModal,
      passwordCriteria,
      showPasswordCriteria,
    } = this.state;

    return (
      <View style={styles.container}>
        {/* Error Popup */}
        {showErrorPopup && (
          <View style={styles.popupContainer}>
            <View style={styles.viewStyle}>
              <Image source={toastIcon} style={styles.toastIcon} />
              <Text style={styles.popupText}>{errorMessage}</Text>
            </View>
          </View>
        )}

        {/* Success Modal */}
        <Modal
          transparent={true}
          visible={showSuccessModal}
          animationType="slide"
          onRequestClose={this.handleCloseModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image style={styles.keyStyle} source={key} />
              <Text style={styles.modalTitle}>Password Updated</Text>
              <Text style={styles.modalText}>
                Your new password has been updated.
              </Text>
              <CustomButton
                title="Back to login"
                onPress={this.handleCloseModal}
                buttonStyle={styles.modalButton}
                textStyle={styles.modalButtonText}
              />
            </View>
          </View>
        </Modal>

        {/* Header with Logo */}
        <View style={styles.header}>
          <Image style={styles.logoStyle} source={logo3} />
          <Text style={styles.resetPasswordStyle}>Reset Password</Text>
          <Text style={styles.textStyle}>
            Enter your new password and confirm it
          </Text>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <CustomTextInput
              placeholder="New Password"
              value={newPassword}
              onChangeText={text =>
                this.handlePasswordChange(text, 'newPassword')
              }
              secureTextEntry={!isPasswordVisible}
              inputStyle={[
                styles.textInputStyle,
                !isPasswordValid && styles.errorBorder,
              ]}
              Animation={true}
            />
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() =>
                this.togglePasswordVisibility('isPasswordVisible')
              }>
              <Image
                style={styles.eyeStyle}
                source={isPasswordVisible ? hide : eye}
              />
            </TouchableOpacity>
            <Image
              source={lock}
              style={[
                styles.lockIcon,
                {tintColor: errorMessage ? 'red' : 'lightblue'},
              ]}
            />
          </View>
          {showPasswordCriteria && (
            <View style={styles.criteriaContainer}>
              <View style={styles.criteriaRow}>
                <Image
                  source={passwordCriteria.lengthValid ? right : wrong}
                  style={styles.criteriaIcon}
                />
                <Text style={styles.criteriaText}>8 characters or above</Text>
              </View>
              <View style={styles.criteriaRow}>
                <Image
                  source={passwordCriteria.specialCharValid ? right : wrong}
                  style={styles.criteriaIcon}
                />
                <Text style={styles.criteriaText}>
                  1 or more special characters
                </Text>
              </View>
              <View style={styles.criteriaRow}>
                <Image
                  source={passwordCriteria.numberValid ? right : wrong}
                  style={styles.criteriaIcon}
                />
                <Text style={styles.criteriaText}>1 or more numbers</Text>
              </View>
              <View style={styles.criteriaRow}>
                <Image
                  source={passwordCriteria.upperLowerValid ? right : wrong}
                  style={styles.criteriaIcon}
                />
                <Text style={styles.criteriaText}>Upper and lowercase</Text>
              </View>
            </View>
          )}

          <View style={styles.inputWrapper}>
            <CustomTextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={text =>
                this.handlePasswordChange(text, 'confirmPassword')
              }
              secureTextEntry={!isConfirmPasswordVisible}
              inputStyle={[
                styles.textInputStyle,
                !isPasswordValid && styles.errorBorder,
              ]}
              Animation={true}
            />
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() =>
                this.togglePasswordVisibility('isConfirmPasswordVisible')
              }>
              <Image
                style={styles.eyeStyle}
                source={isConfirmPasswordVisible ? hide : eye}
              />
            </TouchableOpacity>
            <Image
              source={lock}
              style={[
                styles.lockIcon,
                {tintColor: errorMessage ? 'red' : 'lightblue'},
              ]}
            />
          </View>
        </View>
        <View style={styles.btnView}>
          <CustomButton
            title="Submit"
            onPress={this.handlePress}
            buttonStyle={styles.submitButton}
            textStyle={styles.submitButtonText}
          />
        </View>
      </View>
    );
  }
}

export default ResetPassword;
