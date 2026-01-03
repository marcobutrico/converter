// import { StyleSheet } from "react-native";
// import { colors } from "../../styles/colors";

// export const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.cardBackground,
//         borderRadius: 16,
//         padding: 24
//     },
//     label: {
//         color: colors.textSecondary,
//         marginBottom: 8,
//         fontSize: 18
//     },
//     amount: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: colors.text,
//         marginBottom: 14
//     },
//     rate: {
//         color: colors.textSecondary,
//         fontSize: 14
//     }

// })

import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 24,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  column: {
    flex: 1,
  },

  label: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 6,
  },

  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },

  rate: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
