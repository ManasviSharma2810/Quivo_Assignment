import React, { Component } from 'react';
import { TextInput, View, StyleSheet,Animated } from 'react-native';

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.placeholderTop = new Animated.Value(this.props.value ? 0 : 20);
   
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.placeholderTop.setValue(this.props.value ? 0 : 20);
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
    this.placeholderTop.setValue(0);
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
    if (!this.props.value) {
      this.placeholderTop.setValue(20);
    }
  };

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <TextInput 
          placeholder={this.props.Animated ?   this.props.placeholder : null}   
          onChangeText={this.props.onChangeText} 
          value={this.props.value}              
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
          style={[styles.textInput, this.props.inputStyle,this.props.textInputstyle]} 
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onSubmitEditing={this.props.onSubmitEditing}
          ref={this.props.forwardRef}
        />

      {this.props.Animation ? 
        <Animated.Text 
        style={[
          styles.placeholder, 
          {
            top: this.placeholderTop, 
            position: 'absolute', 
          },
          this.props.errors?{color:'red'}:{color:'#60707d'}
        ]}
        pointerEvents="none" 
      >
        {this.props.placeholder}
      </Animated.Text>  : null
    }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textInput: {
    marginHorizontal:10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingStart:35,
    borderRadius: 5,
    fontSize: 16,
    height:60,

  },
  placeholder: {
    position: 'absolute',
    paddingLeft: 50,
    color: '#60707D',
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
});
