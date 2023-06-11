
const calculateTotalCost = (cart) => {
    let totalCost = 0;
  
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      const { unitPrice, quantity } = item;
      const itemCost = unitPrice * quantity;
      totalCost += itemCost;
    }
  
    return totalCost;
  };

  const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 3, quantity: 1 }
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(totalCost); // Output: 37
  
  