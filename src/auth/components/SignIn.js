import React, { Component } from "react";
import { StatusBar, View, Text, ScrollView, AsyncStorage } from "react-native";
import styles from "../styles/SignInStyle";
import colors from "../../utils/colors";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";
import config from "../../utils/config";

// create a component
class SignIn extends Component {
  static navigationOptions = {
    title: " ",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null
    };
  }

  async componentDidMount() {
    const { navigate } = this.props.navigation;
    await this._configureGoogleSignIn();
    await this._getCurrentUser();
    isUserdLoggedIn = await AsyncStorage.getItem("USER");
    if (isUserdLoggedIn) {
      navigate("NearByPlaces", { userInfo: isUserdLoggedIn });
    }
  }

  _configureGoogleSignIn() {
    console.log("_configureGoogleSignIn called");
    GoogleSignin.configure({
      webClientId: config.webClientId,
      offlineAccess: false
    });
  }

  async _getCurrentUser() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo, error: null });
    } catch (error) {
      const errorMessage =
        error.code === statusCodes.SIGN_IN_REQUIRED
          ? "Please sign in :)"
          : error.message;
      this.setState({
        error: new Error(errorMessage)
      });
    }
  }

  _signIn = async () => {
    console.log("Pressed");
    const { navigate } = this.props.navigation;
    try {
      let res = await GoogleSignin.hasPlayServices();
      console.log(res);
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo", userInfo);
      this.setState({ userInfo });

      if (userInfo) {
        await AsyncStorage.setItem("USER", JSON.stringify(userInfo));
        navigate("NearByPlaces", { userInfo: userInfo });
      }
    } catch (error) {
      console.log("userInfo==error", error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={colors.white}
          hidden={false}
        />

        <GoogleSigninButton
          style={{ width: 212, height: 48 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Auto}
          onPress={this._signIn}
          disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}

export default SignIn;
SignIn.propTypes = {};
