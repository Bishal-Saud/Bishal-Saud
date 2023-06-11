function printDivisibleByThree(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      if (num % 3 === 0 && num % 2 !== 0) {
        console.log(num);
      }
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  printDivisibleByThree(numbers);
  