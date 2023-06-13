function reverseString(string) {
    return setTimeout(() => {
      const reversedStr = string.split('').reverse().join('');
      console.log(reversedStr);
    }, 2000);

  }
  
  let inputString = prompt("Enter a string:");
  let reversedString = reverseString(inputString);
  console.log("Reversed string:", reversedString);
