import {StyleSheet} from 'react-native';

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
  }
});

export default styles;
