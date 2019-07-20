import { StyleSheet } from "react-native";
import colors from "../utils/colors";

const ListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10
  },
  text: {
    fontSize: 14,
    color: colors.balck
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: colors.dividerColor,
    marginTop: 10
  }
});

export default ListItemStyles;
