import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import ButtonStyles from "./ButtonStyles";
import PropTypes from "prop-types";

class Button extends Component {
  static navigationOptions = {
    header: null
  };

  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  renderShowImageOrText() {
    if (this.props.centerImagePath) {
      return (
        <View>
          <Image
            style={this.props.centerImage}
            source={this.props.centerImagePath}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text style={this.props.textStyle}>{this.props.title}</Text>
        </View>
      );
    }
  }

  renderShowLeftImage() {
    if (this.props.leftImagePath) {
      return (
        <Image source={this.props.leftImagePath} style={this.props.leftImage} />
      );
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={this.props.container}>
          <ActivityIndicator size={"small"} color={"white"} />
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={this.onPress}
          style={this.props.container}
          disabled={this.props.disabled}
          activeOpacity={this.props.activeOpacity}
        >
          {this.renderShowLeftImage()}
          {this.renderShowImageOrText()}
        </TouchableOpacity>
      );
    }
  }
}
export default Button;

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
  container: PropTypes.any,
  buttonType: PropTypes.any,
  textStyle: PropTypes.any,
  centerImage: PropTypes.any,
  centerImagePath: PropTypes.any,
  leftImage: PropTypes.any,
  leftImagePath: PropTypes.any,
  loaderType: PropTypes.any,
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  title: "",
  onPress: null,
  loading: false,
  container: ButtonStyles.container,
  textStyle: ButtonStyles.text,
  centerImage: ButtonStyles.centerImage,
  centerImagePath: null,
  leftImagePath: null,
  leftImage: ButtonStyles.leftImage,
  activeOpacity: 0.5
};
