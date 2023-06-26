class Person {

    constructor (name,age){
 this.name = name;
 this.age = age;
        if(this.name === undefined || this.age === null){
        
            this.name = "Unknown";
            this.age = 0;
        } 
    }

     getDetails(){
      
        return  `name: ${this.name}, age: ${this.age}` ;
     }
}

let person = new Person("Bishal",19);
console.log("person1",person.getDetails());


let person2 = new Person();
console.log("person2",person2.getDetails());
