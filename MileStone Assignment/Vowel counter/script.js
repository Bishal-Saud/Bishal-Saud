function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let char of name.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  const names = prompt("Enter a name:");
  const vowelCount = countVowels(names);
  console.log("Number of vowels:", vowelCount);
  