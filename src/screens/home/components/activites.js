import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Activities extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>PT</Text> 
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Prabhat mentioned you</Text>
          <Text style={styles.messageText}>Hi @ankit, are you here?</Text>
        </View>
        <Text style={styles.timeText}>12:45</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth:1,
    borderBottomColor:'#ebecec',
    paddingHorizontal:20
    
    // backgroundColor: 'gray', // Background for the whole component
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular avatar
    backgroundColor: '#6067b2', // Purple background
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E3A5F', // Darker color for the title
  },
  messageText: {
    fontSize: 14,
    fontWeight:'500',
    color: '#7A8A99', // Gray color for the message
  },
  timeText: {
    color: '#7A8A99', // Gray color for the timestamp
    fontSize: 12,
  },
});

export default Activities