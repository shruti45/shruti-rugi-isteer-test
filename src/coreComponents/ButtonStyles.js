import { StyleSheet } from "react-native";
import colors from "../utils/colors";

const ButtonStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  rectangle: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    height: 50,
    width: "80%",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green
  },

  text: {
    color: colors.white,
    fontSize: 12,
    alignItems: "center",
    marginBottom: 2,
    justifyContent: "center"
  },
  leftImage: {
    position: "absolute",
    width: 20,
    height: 20,
    left: 15
  },
  centerImage: {
    width: 18,
    height: 18
  }
});

export default ButtonStyles;
