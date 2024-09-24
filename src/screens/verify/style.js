import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F7FA',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    leftIcon: {
      paddingVertical: 50,
    },
    subtitle: {
      fontSize: 16,
      color: '#606770',
      marginBottom: 20,
    },
    Inputcontainer: {
      backgroundColor: 'white',
      paddingVertical: 5,
      borderRadius: 8,
    },
    otpInput: {
      borderRightWidth: 1,
      height: 40,
      borderBottomWidth: 0,
      textAlign: 'center',
      fontSize: 18,
      margin: 5,
    },
    resendText: {
      fontSize: 16,
      color: '#007BFF',
      marginTop: 10,
      textAlign: 'right',
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
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
    modalTextLocked: {
      marginVertical: 20,
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 20,
    },
    modalText: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    lockStyle: {
      width: 50,
      height: 50,
      marginBottom: 20,
    },
    leftArrow:{
      height:50,
      width:50
    }
  });
  export default styles;