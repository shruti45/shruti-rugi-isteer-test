/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import configureStore from "./configStore";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";

import SignIn from "./src/components/SignIn";
import NearByPlaces from "./src/containers/NearByPlacesContainer";
import Map from "./src/components/Map";
import Launcher from "./src/components/Launcher";
const AssignmentStack = createStackNavigator({
  Launcher: { screen: Launcher },
  SignIn: {
    screen: SignIn
  },
  NearByPlaces: {
    screen: NearByPlaces
  },
  Map: {
    screen: Map
  }
});
const AppContainer = createAppContainer(AssignmentStack);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore()
    };
  }
  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <AppContainer />
      </Provider>
    );
  }
}
