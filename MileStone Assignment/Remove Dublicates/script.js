// function removeDuplicates(cart) {
//     return Array.from(new Set(cart));
//   }
  
//   // Example usage:
//   const shoppingCart = ['item1', 'item2', 'item1', 'item3', 'item2'];
//   const uniqueItems = removeDuplicates(shoppingCart);
//   console.log(uniqueItems);
function removeDuplicates(cart) {
    return cart.filter((item, index) => cart.indexOf(item) === index);
  }
  
  // Example usage:
  const shoppingCart = ['item1', 'item2', 'item1', 'item3', 'item2'];
  const uniqueItems = removeDuplicates(shoppingCart);
  console.log(uniqueItems);
  