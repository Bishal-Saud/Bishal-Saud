let exchangeRate = 80; // Exchange rate : 1 USD = 80 INR
let items = {mobile: 90,
mouse : 80,
keyboard: 70,
laptop:40,
speaker:60};

let covertedPrice = Object.keys(items).map(key => ({
    items : key,
    priceINR : items[key] * exchangeRate
}));


console.log(covertedPrice);
