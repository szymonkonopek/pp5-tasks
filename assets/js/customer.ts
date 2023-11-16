class Customer{
    constructor(){}

    name = "";
    nip = "";
    city = "";
    street = "";
    houseNumber = "";
    zipCode = "";
    comments = "";
    industry = "";
    active = true

    getAddress(){
        return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
    }
    getCustomerInfo(){
        return `${this.name} (${this.nip})`;
    }
}

class Supplier extends Customer{
    constructor(accountNumber: any){
        super();
    }
    accountNumber = "";
    invoices = [];
}