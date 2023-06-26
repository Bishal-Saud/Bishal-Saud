class car {

    constructor (c,m,y) {
        this.company = c;
        this.model = m;
        this.year = y;
    }

    getDescription(){
console.log(`This is ${this.year} ${this.model} ${this.company}`)
// return (`This is ${this.year} ${this.model} ${this.company}`) // It also worked same 
    }

}

let myCar = new car("lambore","A1",2023);
myCar.getDescription();
// console.log(myCar.getDescription());