function calculateRentalCost(numDays, carType) {
  let rentalCost;
  
  if (carType === "Economy") {
    rentalCost = 4000;
  } else if (carType === "Midsize") {
    rentalCost = 15000;
  } else if (carType === "Luxury") {
    rentalCost = 25000;
  } else {
    return "Invalid car type";
  }
  
  let totalCost = rentalCost * numDays;
  return totalCost;
}

let rentalCost = calculateRentalCost(7, "Economy");
console.log(rentalCost);
