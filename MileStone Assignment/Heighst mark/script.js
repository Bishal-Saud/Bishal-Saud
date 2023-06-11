function findHighestMarks(marks) {
    let highestMarks = marks[0]; // Assume the first student has the highest marks
  
    for (let i = 1; i < marks.length; i++) {
      highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }
  
    return highestMarks;
  }
  
  // Example usage
  const marks = [85, 92, 78
    , 90, 88];
  const highestMarks = findHighestMarks(marks);
  console.log("The highest marks scored by a student: " + highestMarks);