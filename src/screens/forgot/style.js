import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  arrowStyle: {
    height: 48,
    width: 48,
    top: 66,
    left: 25,
  },
  forgotStyle: {
    height: 60,
    width: 366,
    top: 160,
    left: 25,
    fontWeight: '700',
    fontSize: 24,
  },
  textStyle: {
    color: '#4F5F72',
    top: 140,
    fontSize: 15,
    left: 25,
  },
  ttextStyle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
    marginStart:10
  },
  inputContainer: {
    marginTop: 150,
    
    
  },
  
  container:{
    flex:1
  },
  
  errorText: {
    color: 'red',
    marginTop: 5,
    start: 20,
  },
  invalidInput: {
    borderColor: 'red', 
  },
  popupContainer: {
    position: 'absolute',
    top: 70,
    backgroundColor: '#F04438',
    padding: 15,
    zIndex: 1,
    start: 45,
    alignItems: 'center',
    borderRadius: 8,
    width: '80%',
  },
  popupText: {
    color: '#fff',
    textAlign: 'center',
    marginStart:10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20, // Adjust padding
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 20, // Adjust horizontal margins
    marginVertical: 'auto', // Center vertically without extra space
  },

  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 15,
  },

  modalButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  modalButtonText: {
    top: 15,
    fontSize: 16,
    color: 'white',
  },
  modalTextLinksent: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
  },
  pointStyle: {
    width: 50,  // Set appropriate width
  height: 50, // Set appropriate height
  marginBottom: 10, 
  },
  emailIcon:{
    position:'absolute',
    top:30,
    left:30,
    height:20,
    width:20
  },
  textInputStyle2:{
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    position: 'relative',
    paddingLeft:35
  },
  toastIcon: {
    width: 20, 
    height: 20, 
    resizeMode: 'contain',
  },  viewStyle:{
    flexDirection:"row"
      },
      btnView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom:30
      }
});
export default styles;
