import { TextInput, Text, View } from "react-native";
import { styles } from "./style";
import { colors } from "../../styles/colors";

export function Input({ value, onChangeText, label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder="0,00"
        placeholderTextColor={colors.text}
        value={value}
        onChangeText={onChangeText}
        keyboardType="decimal-pad"
      ></TextInput>
    </View>
  );
}

