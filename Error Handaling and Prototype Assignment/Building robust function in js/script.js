
function getPerson(person) {
    try {
      if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
        throw new Error('Invalid parameter type');
      }
    
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
      return error.message;
    }
  }

  const person1 = { name: 'Bishal Saud', age: 19 };
  console.log(getPerson(person1)); // Output: Name: Bishal Saud, Age: 19
  
  const person2 = { name: 'Smith' };
  console.log(getPerson(person2)); // Output: Invalid parameter type
  
  const person3 = 'Bishal Saud';
  console.log(getPerson(person3)); // Output: Invalid parameter type
  
