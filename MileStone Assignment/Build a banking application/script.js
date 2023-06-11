const customer ={
    names: "Bishal Saud",
    balance: 1000,
    
    deposit(amount){
        this.balance += amount;
        console.log(`Deposit of $${amount} sucessful. New balance $ ${this.balance} `);

    },

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdraw of $${amount} sucessful. New balance : $${this.balance}`);
        } else {
            console.log("Indufficient funds !");
        }
    }
};

// Example

console.log(`Customer: ${customer.names}`);
console.log(`intial balance: $${customer.balance}`);

customer.deposit(500);
customer.withdraw(200);
customer.withdraw(1500);