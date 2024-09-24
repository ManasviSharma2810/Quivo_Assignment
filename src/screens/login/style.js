import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  popupContainer: {
    position: 'absolute',
    top: 60,
    backgroundColor: '#F04438',
    padding: 8,
    zIndex: 1,
    marginLeft: 23,
    alignItems: 'center',
    borderRadius: 8,
  },
  toastIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  popupText: {
    color: '#fff',
  },
  image: {
    width: '100%',
    height: height * 0.4,
    resizeMode: 'cover',
  },
  logo: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  backgroundStyle: {
    margin: 10,
  },
  signInContainer: {
    padding: 10,
    paddingHorizontal: 18,
  },
  signInText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 10,
  },
  credentialsText: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    color: 'grey',
  },
  forgotStyle: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'right',
    marginEnd: 20,
    fontWeight: '600',
  },
  inputStyle: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    position: 'relative',
    paddingLeft: 35,
  },
  emailIcon: {
    position: 'absolute',
    top: 30,
    left: 30,
    height: 20,
    width: 20,
  },
  lockIcon: {
    position: 'absolute',
    top: 25,
    left: 30,
    height: 25,
    width: 25,
  },
  errorText: {
    color: 'grey',
    marginLeft: 10,
  },
  errorBorder: {
    borderColor: 'red',
  },
  iconContainer: {
    position: 'absolute',
    right: 30,
    top: 30,
  },
  eyeStyle: {
    height: 20,
    width: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  modalTextLocked: {
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
  },
  lockStyle: {
    height: 50,
    width: 40,
  },
  viewStyle: {
    flexDirection: 'row',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    // To add some space between the input and the error message
  },
  alertIcon: {
    height: 15,
    width: 15,
    marginLeft: 10,
    // Adds space between the icon and the error text
  },
});
export default styles;
