//import libraries and files
import React, { Component } from "react";
import { View, Text, AsyncStorage, PermissionsAndroid } from "react-native";
import Button from "../../coreComponents/Button";
import styles from "../styles/SignInStyle";
import { GoogleSignin } from "react-native-google-signin";
import Geolocation from "@react-native-community/geolocation";

//Component
class NearByPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null,
      location: null,
      locationDetails: null,
      lat: null,
      lng: null,
      data: null,
      loader: true
    };
  }

  async componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ userInfo: params.userInfo });
    await this.requestLocationPermission();
  }

  requestLocationPermission = async  => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Example App",
          message: "Example App access to your location "
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alert("You can use the location");
        Geolocation.getCurrentPosition(position => {
          console.log("Posirion", position);
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
      } else {
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  _signOut = async () => {
    const { navigate } = this.props.navigation;
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({ userInfo: null, error: null });
      AsyncStorage.removeItem("USER");

      navigate("SignIn");
    } catch (error) {
      console.log("error-logout", error);
      this.setState({
        error
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>NearByPlaces</Text>
        <Button
          container={styles.buttonContainer}
          textStyle={styles.buttonLabel}
          onPress={this._signOut}
          title="log out"
        />
      </View>
    );
  }
}

//To make this component available to the app
export default NearByPlaces;
