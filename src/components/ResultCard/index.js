// import { Text, View } from "react-native";
// import { styles } from "./style";

// export function ResultCard({
//   result,
//   fromCurrency,
//   toCurrency,
//   exchangeRate,
//   currencies,
// }) {
//   if (!result || exchangeRate === null) {
//     return null; // Não renderiza nada se não houver resultado
//   }

//   const toSymbol =
//     currencies.find((currency) => currency.code === toCurrency)?.symbol || "";
//   const fromSymbol =
//     currencies.find((currency) => currency.code === fromCurrency)?.symbol || "";

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Resultado:</Text>
//       <Text style={styles.amount}>
//         {toSymbol} {result.toFixed(2)}
//       </Text>
//       <Text style={styles.label}>Taxa de câmbio:</Text>
//       <Text style={styles.label}>
//         {fromSymbol} 1.00 = {toSymbol} {exchangeRate.toFixed(4)}
//       </Text>
//     </View>
//   );
// }

import { Text, View } from "react-native";
import { styles } from "./style";

export function ResultCard({
  result,
  fromCurrency,
  toCurrency,
  exchangeRate,
  currencies,
}) {
  if (!result || exchangeRate === null) {
    return null;
  }

  const toSymbol =
    currencies.find((currency) => currency.code === toCurrency)?.symbol || "";
  const fromSymbol =
    currencies.find((currency) => currency.code === fromCurrency)?.symbol || "";

  return (
    <View style={styles.container}>
      {/* Row 1 */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Resultado</Text>
          <Text style={styles.amount}>
            {toSymbol} {result.toFixed(2)}
          </Text>
        </View>

        <View style={styles.column}>
          
          <Text style={styles.label}>Taxa de câmbio</Text>
          <Text style={styles.rate}>
            {fromSymbol} 1.00 = {toSymbol} {exchangeRate.toFixed(4)}
          </Text>

        </View>
      </View>
    </View>
  );
}
