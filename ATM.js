function atm(value) {
  const VALUES = {
    "EUR": [500, 200, 100, 50, 20, 10, 5],
    "USD": [100, 50, 20, 10, 5, 2, 1],
    "RUB": [5000, 1000, 500, 100, 50, 10],
    "UAH": [500, 200, 100, 50, 20, 10, 5, 2, 1],
    "CUP": [100, 50, 20, 10, 5, 3, 1],
    "SOS": [1000, 500, 100, 50, 20, 10]
  };
  const DIVISIBLE_RULES = {
    EUR: 5,
    RUB: 10,
    SOS: 1000,
  }

  let result = []
  const regex = /^(\d+)\s*([a-zA-Z]+)$|^([a-zA-Z]+)\s*(\d+)$/i;
  let math = value.match(regex);
  
  if (!math) {
    return `Sorry, have no ${value.match(/[^\d\s]+/g).join("")}.`
  }
  const currencyCode = (math[2] || math[3]).toUpperCase();
  let amountToWithdraw = math[1] || math[4];


  if (!VALUES[currencyCode]) {
    return `Sorry, have no ${currencyCode}.`
  }

  const minDivisibility = DIVISIBLE_RULES[currencyCode] || 1
  if (amountToWithdraw % minDivisibility !== 0) {
    return `Can't do ${amountToWithdraw} ${currencyCode}. Value must be divisible by ${DIVISIBLE_RULES[currencyCode]}!`
  }

  const sortedAmountToWithdraw = [...VALUES[currencyCode]].sort((a, b) => b - a)
  for (let nominal of sortedAmountToWithdraw) {
    const usedCurrencyToWithdraw = Math.floor(amountToWithdraw / nominal)
    if (usedCurrencyToWithdraw !== 0) {
      result.push(` ${usedCurrencyToWithdraw} * ${nominal} ${currencyCode}`)
      amountToWithdraw -= usedCurrencyToWithdraw * nominal
    }

  }
  return result.join(",").trim()
}

console.log(atm('wewer92422222 EUR'));