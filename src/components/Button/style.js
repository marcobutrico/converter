import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  button: {
    width: "18%", // 5 botões por linha
    paddingVertical: 10,
    marginBottom: 8,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",

    // backgroundColor: colors.inputBackground,
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    // margin: 4,
    // borderRadius: 8
  },
  buttonText: {
    color: colors.text,
    fontWeight: "500",
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
});
