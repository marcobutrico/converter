import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

export function Button({ variant = "secondary", onPress, currency, isSelected,textStyle, }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSelected && (variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary)
      ]}
    >
      <Text style={styles.buttonText}>{currency.code}</Text>
    </TouchableOpacity>
  );
}
