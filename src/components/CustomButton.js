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
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    padding: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
