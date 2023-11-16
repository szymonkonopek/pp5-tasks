"use strict";
class Customer {
    constructor() {
        this.name = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.zipCode = "";
        this.comments = "";
        this.industry = "";
        this.active = true;
    }
    getAddress() {
        return `${this.city} ${this.zipCode} ${this.street} ${this.houseNumber}`;
    }
    getCustomerInfo() {
        return `${this.name} (${this.nip})`;
    }
}
class Supplier extends Customer {
    constructor(accountNumber) {
        super();
        this.accountNumber = "";
        this.invoices = [];
    }
}
