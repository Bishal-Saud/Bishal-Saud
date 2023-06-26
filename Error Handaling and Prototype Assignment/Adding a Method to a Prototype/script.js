// Creating the prototype object
function Student(name) {
  this.name = name;
}

// Adding the printDetails method to the prototype
Student.prototype.printDetails = function (){
    return `Hello,The student name is ${this.name}`
}

const studenttName = new Student("Bishal saud");
console.log(studenttName.printDetails());