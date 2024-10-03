import React, {Component, StyleSheet} from 'react';

import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'rn-material-ui-textfield';

export default class TextInput extends Component {
  render() {
    return (
      <OutlinedTextField
        label={this.props.placeholder}
        labelFontSize={15}
        tintColor={this.props.tintColor}
        inputContainerStyle={this.props.input}
        onSubmitEditing={this.props.onSubmitEditing}
        containerStyle={this.props.containerStyle}
        onChangeText={this.props.onChangeText}
        ref={this.props.forwardedRef}
        disabledLineWidth={1}
        textColor={this.props.textColor}
        contentInset={this.props.contentInset}
        labelOffset={this.props.labelOffset}
        titleTextStyle={{
          color: 'black',
        }}
        value={this.props.value}
        disabled={this.props.disabled}
        errorColor={this.props.errorColor}
        error={this.props.error}
      />
    );
  }
}
