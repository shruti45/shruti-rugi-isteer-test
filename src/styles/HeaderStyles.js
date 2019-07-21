import { StyleSheet } from "react-native";
import colors from "../utils/colors";

const HeaderStyles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    left: 0
  },

  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 10
  },
  headerContainer: {
    height: 50 ,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default HeaderStyles;
