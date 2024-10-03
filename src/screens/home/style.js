import {StyleSheet} from 'react-native';
import { vh,vw } from '../../utils/dimensions';

const styles = StyleSheet.create({
  header: {
    height: 125,
    backgroundColor: '#2A7BBB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  welcome: {
    top: 15,
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  kevin: {
    top: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  msgbellStyle: {
    flexDirection: 'row',
  },
  iconStyle: {
    top: 15,
    height: 24,
    width: 24,
    marginLeft: 10, // Space between the icons
  },
  cardView: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    padding: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  screw: {
    height: 36,
    width: 36,
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: '700',
  },
  text2: {
    paddingVertical: 5,
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
  },
  heading: {
    marginHorizontal: 20,
    marginVertical: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  frequentlyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute items evenly
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  activitiesContainer: {
    marginHorizontal: 15, 
    paddingBottom: 20, 
  },

  
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',  
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    
  },
  
  modalContent: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 40, 
    borderRadius: 10, 
    alignItems: 'center',
    marginHorizontal: 20,
    width: '100%', 
  },
  modalTextLocked: {
  marginTop:10,
    fontWeight: '700',
    fontSize: 24,
    color: 'black', 
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
    lineHeight: 22, 
  },
  lockStyle: {
    height: 148,
    width: 111,
    marginBottom: 10,
  },
  bellIconStyle:{
    top:15,
height:35,
width:35
  },
  stepsContainer: {
    marginVertical: 20, // Spacing for the steps container
    alignItems: 'flex-start', // Align steps to the left for clarity
   // Ensure steps take up full modal width
  },
  stepText: {
    fontSize: 16,
    marginTop:12
  },
  iconStyle:{
    height:70,
    width:70
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'flex-start',
    paddingTop: 60,
  },
  backEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  arrowImage: {
    width: 10,
    height: 12,
  },
  editProfile: {
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    left: '40%',
  },
  girlStyle: {
    borderRadius: 100,
    width: '100%',
    height: '100%',
  },
  girlView: {
    marginTop: 20,
    width: vw(100),
    height: vh(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1ebfe',
    borderRadius: 100,
  },
  innerViewStyle: {
    padding: 15,
    flexDirection: 'row',
  },
  textStyle: {
    paddingLeft: 15,
    paddingTop: 55,
  },
  profileText: {
    padding: 5,
    fontSize: 14,
    color: 'grey',
  },
  changeText: {
    color: '#EE28A9',
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    marginTop:5,
    backgroundColor: '#FFFFFF',

    paddingBottom: 20,
    marginHorizontal: 15,
    // marginBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
  },
  inputContainer: {
    position: 'relative',
  },
  inputWithIcon: {
    position: 'relative',
  },
  calendarIcon: {
    width: 20,
    height: 20,
  },
  phoneInputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
  },
  textInputContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  phoneinputStyle: {
    marginHorizontal: 15,
    // marginBottom: 20,
   
  },
  dropIcon: {
    height: vh(5),
    width: vw(10),
  },
  dropdown: {
    position: 'absolute',
    top: vh(450),
    left: vw(20),
    width: vw(300),
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  genderOption: {
    fontSize: 16,
  },

  containerTop2: {
    flexDirection: 'column',
    marginStart: 14,
    justifyContent: 'center',
  },
  textName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000CC',
  },
  text2: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2A7BBB',
    marginTop: 10,
  },

  headingDescription: {
    marginTop: 8,
    color: '#4D5876',
    fontWeight: '400',
    fontSize: 15,
  },
  marginSide: {
    marginTop: 36,
    marginHorizontal: 24,
  },
  iconSize: {
    height: 55,
    width: 55,
    resizeMode: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#122636',
    marginTop: -2,
    marginStart: 4,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 5,
  },

  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
 
  errorStyle: {
    color: 'red',
    marginBottom:10,
    marginLeft: 20,
    fontSize: 12, 
  },
  
});

export default styles;
