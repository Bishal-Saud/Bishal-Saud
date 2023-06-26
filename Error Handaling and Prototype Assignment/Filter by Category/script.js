function filterByCategory(products) {
  return function(category) {
    return products.filter(product => product.category === category);
  };
}

let products = [
    {names:"Shirt",category:"Clothing"},
    {names:"pant",category:"Clothing"},
    {names:"mobile",category:"electronic"},
    {names:"robot",category:"machine"},
]

const clothingProducts = filterByCategory(products)("Clothing");
console.log(clothingProducts);