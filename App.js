import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Text,
  Platform,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.styles";
import { Button } from "./src/components/Button";
import { Input } from "./src/components/Input";
import { ResultCard } from "./src/components/ResultCard";
import { currencies } from "./src/styles/currencies";
import { exchangeRateAPI } from "./src/services/api";
import { useState } from "react";
import { convertCurrency } from "./utils/convertCurrency";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "./src/styles/colors";
import { useRef } from "react";

export default function App() {
  // Declaração de variáveis
  const [amount, setAmount] = useState("0"); // Quanto o usuário quer converter
  const [fromCurrency, setFromCurrency] = useState("USD"); // Moeda de origem
  const [toCurrency, setToCurrency] = useState("BRL"); // Moeda de destino
  const [loading, setLoading] = useState(false); // Se está carregando ou não
  const [result, setResult] = useState(null); // Resultado da conversão
  const [exchangerate, setExchangeRate] = useState(null); // Resultado da conversão


  async function fetchExchangeRate() {
    try {
      setLoading(true);
      if (!amount) return;
      const data = await exchangeRateAPI(fromCurrency);
      const rate = data.rates[toCurrency];
      const convertedAmount = convertCurrency(amount, rate);
      setExchangeRate(rate);
      console.log(convertedAmount);
      setResult(convertedAmount);
    } catch (err) {
      alert("Erro, tente novamente!");
    } finally {
      setLoading(false);
    }
  }

  function swapCurrency() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult("");
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}
    >
      <KeyboardAvoidingView
        style={[styles.container]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.content}
          // Controla o comportamento do teclado quando o usuário toca
          // em elementos dentro do ScrollView
          // "handled" = mantém o teclado aberto quando o toque é tratado
          // por um componente filho (ex: TextInput, Button)
          keyboardShouldPersistTaps="handled"
          // Desativa o efeito visual de "esticar" o conteúdo
          // quando o usuário rola além do limite (Android)
          overScrollMode="never"
          // Remove a barra de rolagem vertical da tela
          // deixando o layout mais limpo e moderno
          showsVerticalScrollIndicator={false}
        >
          <StatusBar style="light" translucent />

          <View style={styles.header}>
            <Text style={styles.title}>Conversor de moedas</Text>
            <Text style={styles.subtitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="primary"
                  key={currency.code}
                  currency={currency}
                  onPress={() => setFromCurrency(currency.code)}
                  isSelected={fromCurrency === currency.code}
                  textStyle={{ fontSize: 5 }}
                ></Button>
              ))}
            </View>
            <Input
              value={amount}
              onChangeText={(text) => {
                const normalized = text.replace(/^0+(?!$)/, "");
                setAmount(normalized);
              }}
              label={"Digite o valor: "}
            />
            <TouchableOpacity style={styles.swapButton} onPress={swapCurrency}>
              <MaterialIcons
                name="loop"
                size={28}
                color={colors.swapColor}
              /> 
              {/* <Text style={styles.swapButtonText}>↑↓</Text> */}
            </TouchableOpacity>

            <Text style={styles.label}>Para:</Text>
            <View style={styles.currencyGrid}>
              {/* {currencies.map((currency) => ( */}

              {currencies
                .filter((currency) => currency.code !== fromCurrency)
                .map((currency) => (
                  <Button
                    variant="secondary"
                    key={currency.code}
                    currency={currency}
                    onPress={() => {
                      setToCurrency(currency.code);
                    }}
                    isSelected={toCurrency === currency.code}
                  ></Button>
                ))}
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.convertButton,
              (!amount || amount === "0" || loading) &&
                styles.convertButtonDisabled,
            ]}
            onPress={fetchExchangeRate}
            disabled={!amount || loading}
          >
            {loading ? (
              <ActivityIndicator color="White" />
            ) : (
              <Text style={styles.swapButtonText}>Converter</Text>
            )}
          </TouchableOpacity>

          <ResultCard
            result={result}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            exchangeRate={exchangerate}
            currencies={currencies}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
