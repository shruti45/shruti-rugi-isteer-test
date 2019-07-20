/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import SignIn from "./src/auth/components/SignIn";
import NearByPlaces from "./src/auth/components/NearByPlaces";
const AssignmentStack = createStackNavigator({
  SignIn: {
    screen: SignIn
  },
  NearByPlaces: {
    screen: NearByPlaces
  }
});
const AppContainer = createAppContainer(AssignmentStack);

export default class App extends Component {
  UNSAFE_componentWillMount() {
    console.disableYellowBox = true;
  }
  render() {
    return <AppContainer />;
  }
}
