import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./InputStyles";
import colors from "../utils/colors";
import { View, TextInput, Image } from "react-native";

class Input extends Component {
  onChange(val) {
    if (this.props.onChangeText) {
      this.props.onChangeText(val);
    }
  }

  render() {
    return (
      <View style={this.props.inputContainer}>
        {this.props.srcLeft && (
          <Image
            source={this.props.srcLeft}
            style={this.props.iconStyle || styles.leftInlineImage}
          />
        )}
        <View style={styles.inputHolder}>
          <TextInput
            {...this.props}
            style={this.props.style}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderTextColor}
            underlineColorAndroid={this.props.underlineColorAndroid}
            numberOfLines={this.props.numberOfLines}
            onChangeText={val => this.onChange(val)}
          />
        </View>
        {this.props.srcRight && (
          <Image source={this.props.srcRight} style={styles.rightInlineImage} />
        )}
      </View>
    );
  }
}

export default Input;

Input.propTypes = {
  inputContainer: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  srcLeft: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.any,
  underlineColorAndroid: PropTypes.string,
  srcRight: PropTypes.string,
  onChangeText: PropTypes.func,
  numberOfLines: PropTypes.number,
  iconStyle: PropTypes.object
};

Input.defaultProps = {
  inputContainer: styles.borderContainer,
  style: styles.input,
  srcLeft: " ",
  placeholder: "Enter name",
  placeholderTextColor: colors.balck,
  underlineColorAndroid: "transparent",
  srcRight: " ",
  numberOfLines: 1
};
