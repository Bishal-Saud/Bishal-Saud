class Employee {
    constructor (){
        this.name = "Bishal Saud";
        this.position = "CEO";
        this.salary = "80000"
    }
    getSalary (){
        return this.salary;
    }
}

let EmployeeClass = new Employee ();
console.log(EmployeeClass.getSalary());