function calculateBillPerPerson(costPerDish, numberOfPeople) {
  const totalBill = costPerDish.reduce((acc, cost) => acc + cost, 0);
  const billPerPerson = totalBill / numberOfPeople;

  return {
    totalBill: totalBill,
    billPerPerson: billPerPerson,
  };
}

// Example usage
const costPerDish = [10, 15, 20, 12]; // Cost of each dish
const numberOfPeople = 4; // Number of people sharing the dishes

const bill = calculateBillPerPerson(costPerDish, numberOfPeople);
console.log(bill.totalBill); // Output: 57 (total bill)
console.log(bill.billPerPerson); // Output: 14.25 (bill per person)
