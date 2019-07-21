import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";

export default class Launcher extends React.Component {
  static navigationOptions = {
    title: " ",
    header: null
  };

  async componentDidMount() {
    const { navigate } = this.props.navigation;
    let isUserdLoggedIn = await AsyncStorage.getItem("USER");
    if (isUserdLoggedIn) {
      navigate("NearByPlaces", { userInfo: isUserdLoggedIn });
    } else {
      navigate("SignIn");
    }
  }

  async renderUI() {}

  render() {
    return <View />;
  }
}
