import {getFontFamily} from '../../utils/fontFamily';

import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import eye from '../../assets/images/eye.png';
import hide from '../../assets/images/hide.png';
import lock from '../../assets/images/locked.png';
import locked from '../../assets/images/lock.png';
import email from '../../assets/images/email.png';
import toastIcon from '../../assets/images/toastIcon.png';
import alert from '../../assets/images/alertIcon.png';
import BackgroundImage from './header';
import styles from './style';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
      isPasswordVisible: false,
      showErrorPopup: false,
      popupMessage: '',
      failedAttempts: 0,
      isAccountLocked: false,
    };
    this.passwordInputRef = React.createRef();
  }

  correctUsername = 'M@gmail.com';
  correctPassword = '12345678';

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  validatePassword = password => {
    return password.length >= 6;
  };

  handleUsernameChange = text => {
    this.setState({username: text});
  };

  handlePasswordChange = text => {
    this.setState({password: text});
  };

  showErrorPopup = message => {
    this.setState({popupMessage: message, showErrorPopup: true});
    setTimeout(() => {
      this.setState({showErrorPopup: false});
    }, 3000);
  };

  handlePress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef?.current?.focus();
    }
    const {username, password, failedAttempts} = this.state;
    let emailError = '';
    let passwordError = '';

    if (!this.validateEmail(username)) {
      emailError = 'Invalid email address entered.';
    }

    if (!this.validatePassword(password)) {
      passwordError = 'Password must be at least 6 characters long.';
    }

    if (emailError || passwordError) {
      this.setState({
        errors: {
          email: emailError,
          password: passwordError,
        },
      });
      this.showErrorPopup('Please check your email or password and try again.');
    } else if (
      username !== this.correctUsername ||
      password !== this.correctPassword
    ) {
      const newFailedAttempts = failedAttempts + 1;
      if (newFailedAttempts > 3) {
        this.setState({isAccountLocked: true});
      } else {
        this.setState({failedAttempts: newFailedAttempts});
        this.showErrorPopup(
          'The username or password you entered is incorrect.',
        );
      }
    } else {
      {
        this.props.navigation.navigate('Home');
      }
    }
  };

  closeModal = () => {
    this.setState({isAccountLocked: false, failedAttempts: 0});
  };

  navigateToForgotPassword = () => {
    this.props.navigation.navigate('Forgot');
  };

  render() {
    const {
      username,
      password,
      errors,
      showErrorPopup,
      popupMessage,
      isAccountLocked,
    } = this.state;

    const isButtonDisabled =
      !this.validateEmail(username) || !this.validatePassword(password);

    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        {showErrorPopup && (
          <View style={styles.popupContainer}>
            <View style={styles.viewStyle}>
              <View style={{paddingRight: 10}}>
                <Image source={toastIcon} style={styles.toastIcon} />
              </View>
              <Text style={styles.popupText}>{popupMessage}</Text>
            </View>
          </View>
        )}

        <BackgroundImage style={styles.backgroundStyle} />

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Sign in</Text>
          <Text style={styles.credentialsText}>
            with your valid credentials
          </Text>
        </View>
        <View>
          <CustomTextInput
            placeholder="Email Address"
            value={username}
            onChangeText={this.handleUsernameChange}
            inputStyle={[styles.inputStyle, errors.email && styles.errorBorder]}
            Animation={true}
            errors={errors.email}
            onSubmitEditing={this.handlePress} //ref
          />
          <Image
            source={email}
            style={[
              styles.emailIcon,
              {tintColor: errors.email ? 'red' : 'lightblue'},
            ]}
          />
          {errors.email ? (
            <View style={styles.errorContainer}>
              <Image source={alert} style={styles.alertIcon} />
              <Text style={styles.errorText}>{errors.email}</Text>
            </View>
          ) : null}

          <View>
            <View>
              <CustomTextInput
                placeholder="Password"
                value={password}
                onChangeText={this.handlePasswordChange}
                secureTextEntry={!this.state.isPasswordVisible}
                inputStyle={[
                  styles.inputStyle,
                  errors.password && styles.errorBorder,
                  showErrorPopup && styles.errorBorder,
                ]}
                Animation={true}
                errors={errors.password}
                forwardRef={this.passwordInputRef} //ref
              />
              <Image
                source={locked}
                style={[
                  styles.lockIcon,
                  {tintColor: errors.password ? 'red' : 'lightblue'},
                ]}
              />
            </View>

            <TouchableOpacity
              style={styles.iconContainer}
              onPress={this.togglePasswordVisibility}>
              <Image
                style={styles.eyeStyle}
                source={this.state.isPasswordVisible ? hide : eye}
              />
            </TouchableOpacity>
          </View>

          {errors.password ? (
            <View style={styles.errorContainer}>
              <Image source={alert} style={styles.alertIcon} />
              <Text style={styles.errorText}>{errors.password}</Text>
            </View>
          ) : null}

          <Text
            onPress={this.navigateToForgotPassword}
            style={styles.forgotStyle}>
            Forgot Password
          </Text>

          <CustomButton
            title="Primary"
            onPress={this.handlePress}
            disabled={isButtonDisabled}
            buttonStyle={{
              backgroundColor: isButtonDisabled ? 'lightblue' : '#2A7BBB',
            }}
            textStyle={{fontSize: 18}}
          />
          {/* <Text style={{fontFamily: getFontFamily(true, 'bold')}}>
            My text in the right font family - Montserrat Medium!
          </Text> */}
        </View>

        {/* Account Locked Modal */}
        {isAccountLocked && (
          <Modal
            transparent={true}
            visible={isAccountLocked}
            animationType="slide"
            onRequestClose={this.closeModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Image style={styles.lockStyle} source={lock}></Image>
                <Text style={styles.modalTextLocked}>Account Locked</Text>
                <Text style={styles.modalText}>
                  Your account has been locked due to too many failed attempts.
                  Please try again after some time.
                </Text>
                <CustomButton
                  title="Okay"
                  onPress={this.closeModal}
                  buttonStyle={{backgroundColor: '#2A7BBB'}}
                />
              </View>
            </View>
          </Modal>
        )}
      </KeyboardAvoidingView>
    );
  }
}
