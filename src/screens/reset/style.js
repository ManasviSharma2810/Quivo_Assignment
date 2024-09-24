import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop:"20%",
      justifyContent: 'center',
      flex:1
      
    },
    header:{
      marginStart:20
    },
    
    logoStyle: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
    resetPasswordStyle: {
      fontSize: 24,
      fontWeight: '700',
      color: '#000',
      marginVertical: 10,
    },
    textStyle: {
      fontSize: 16,
      color: 'grey',
    },
    inputContainer: {
      marginVertical: 20,
    },
    inputWrapper: {
      position: 'relative',
      marginBottom: 5,
    },
  textInputStyle: {
      backgroundColor: 'white',
      borderRadius: 5,
      paddingLeft: 35,
    },
    errorBorder: {
      borderColor: 'red',
      borderWidth: 1,
    },
    lockIcon: {
      position: 'absolute',
      top: 25,
      left: 25,
      height: 25,
      width: 25,
    },
    viewStyle: {
      flexDirection: 'row',
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
    popupContainer: {
      position: 'absolute',
      top: 20,
      backgroundColor: '#F04438',
      padding: 20,
      zIndex: 1,
     marginEnd:10,
      borderRadius: 8,
      width: '90%',
      flexDirection:"row",
      marginHorizontal: '5%',
    },
    toastIcon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    popupText: {
      color: '#fff',
      marginLeft: 10,
    },
    submitButton: {
      backgroundColor: 'lightblue',
    },
    submitButtonText: {
      fontSize: 18,
    },
    errorText: {
      color: 'red',
      marginStart:'20'
     
    },
    keyStyle:{
      height: 50,
      width: 50,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalText: {
      fontSize: 16,
      marginBottom: 20,
    },
    modalButton: {
      backgroundColor: 'lightblue',
    },
    modalButtonText: {
      fontSize: 18,
    },
    criteriaContainer: {
      paddingHorizontal: 20,
    },
    criteriaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    criteriaIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    criteriaText: {
      fontSize: 16,
      color: 'grey',  
    },
    btnView: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom:30
    }
  });

export default styles;
