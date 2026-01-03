const API_BASE_URL = "https://api.exchangerate-api.com/v4/latest";

export async function exchangeRateAPI(fromCurrency) {
  const response = await fetch(`${API_BASE_URL}/${fromCurrency}`);
  const data = await response.json();
  return data;
}


