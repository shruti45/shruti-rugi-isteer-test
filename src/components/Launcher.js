import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import styles from "../styles/LauncherStyles";

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

  render() {
    return <View style={styles.container} />;
  }
}
