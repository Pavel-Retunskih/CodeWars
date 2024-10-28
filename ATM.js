const bill = {
  5000: 5,
  1000: 3,
  500: 2,
  200: 4,
  100: 5,
  50: 10,
};
function Atm(balance, currency, bills) {
  const result = {};
  let remain = currency

  if (balance < currency) {
    return "Недостаточно средств на счете.";
  }
  const availableBills = Object.keys(bills).map(Number).sort((a, b) => b - a);
  for( let bill of availableBills){
    let neededBill = Math.floor(remain / bill)


    let availableNeededBills = bills[bill]
    let usedBills = Math.min(neededBill, availableNeededBills);

    if(usedBills>0){
      result[bill] = usedBills;
      remain -= usedBills*bill;
    }

  }
  if(remain>0){
    return "Невозможно выдать такую сумму."
  }
  for(let [bill, count] of Object.entries(result)){
    bills[bill] -= count;
  }
  balance-=currency

  return {
    message: "Операция успешна",
    withdrawn: result,
    newBalance: balance
  };

}

console.log(Atm(10000, 4750, bill))
