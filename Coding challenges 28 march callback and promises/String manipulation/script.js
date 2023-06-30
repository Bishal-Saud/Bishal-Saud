function manipulateString(str, callback) {
    let inputString = str;
    let manipulatedString = callback(inputString);
    return manipulatedString;
  }
  
  function logString(value) {
    return `The manipulated string is: ${value.toUpperCase()}`;
  }
  
  console.log(manipulateString("Hey Bishal", logString));
  