import { StyleSheet,Dimensions } from "react-native";

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#338ac2"

    },
   
    screen: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      
    },
    imgStyle: {
      height: '38%',
      width: '100%',
    },
    description: {
      fontSize: 20,
      color: 'white',
      marginTop: 10,
      textAlign: 'center',

    },
    dotContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#333',
    },
    inactiveDot: {
      backgroundColor: '#ccc',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
      alignItems: 'center',
    },
    loginButton: {
      paddingVertical: 10,
      borderWidth: 2,
      paddingHorizontal: 40,
      borderRadius: 30,
      marginHorizontal: 10,
      alignItems: 'center',
    },
    registerButton: {
      borderWidth: 2,
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 30,
      marginHorizontal: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles