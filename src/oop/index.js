class Customer{
    //prototip
    constructor(id, customerNumber){
        //instance-prototyping
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345");
//prototyping

//instance prototyping
customer.name = "Ahmed Ahmed"
console.log(customer.name)

//class prototyping
Customer.something = "Bişey"
console.log(Customer.something)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }
}