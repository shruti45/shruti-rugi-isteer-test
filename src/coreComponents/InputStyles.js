import { StyleSheet } from "react-native";
import colors from "../utils/colors";

const InputStyles = StyleSheet.create({
  borderContainer: {
    backgroundColor: colors.grey,
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 50,
    alignItems: "center",
    borderRadius: 3
  },
  inputHolder: {
    height: "100%",
    flex: 1
  },
  input: {
    height: 50,
    fontSize: 14,
    padding: 10,
    color: colors.balck
  },
  borderContainerDesc: {
    flexDirection: "row",
    backgroundColor: colors.grey,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderRadius: 3
  },
  leftInlineImage: {
    width: 20,
    height: 20
  },
  rightInlineImage: {
    width: 20,
    height: 20
  },
  inputDesc: {
    height: 100,
    fontSize: 14,
    paddingTop: 0,
    textAlignVertical: "top",
    color: colors.balck
  },
  centerInlineImage: {
    width: 40,
    height: 40,
    left: 15
  },
  bottomBorderContainer: {
    backgroundColor: colors.white,
    justifyContent: "center",
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey
  },

  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white
  }
});

export default InputStyles;
