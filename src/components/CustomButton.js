import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.button, this.props.buttonStyle]}
        onPress={this.props.onPress}>
        <Text style={[styles.buttonText, this.props.textStyle]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
   borderRadius:20,
    marginHorizontal: 15,
    marginTop:15
  },
  buttonText: {
    padding: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
