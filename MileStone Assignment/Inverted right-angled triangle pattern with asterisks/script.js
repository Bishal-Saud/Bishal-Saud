function printInvertedTriangle(i) {
  for (let row = i; row > 0; row--) {
    console.log('*'.repeat(row));
  }
}

// Get user input
const numRows = parseInt(prompt("Enter the number of rows:"));

// Print the inverted triangle pattern
printInvertedTriangle(numRows)