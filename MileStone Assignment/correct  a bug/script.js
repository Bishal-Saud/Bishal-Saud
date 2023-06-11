function doubleCartItemQuantities(cart) {
  // Create a new array to store the updated quantities
  let updatedCart = [];

  // Iterate over each item in the cart
  for (let i = 0; i < cart.length; i++) {
    // Get the quantity of the current item
    let quantity = cart[i];

    // Double the quantity and add it to the updated cart array
    updatedCart.push(quantity * 2);
  }

  // Return the updated cart array
  return updatedCart;
}

// Example cart array
let cart = [1, 3, 2, 4];

// Double the quantities of each item in the cart
let updatedCart = doubleCartItemQuantities(cart);

// Output the updated cart array
console.log(updatedCart);
