"use strict";
class Index {
    constructor() {
        this.name = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.zipCode = "";
        this.comments = "";
        this.industry = "";
        this.active = false;
    }
    getCustomerInfo() {
        return `${this.name} - ${this.nip}`;
    }
}
const customersList = [];
function showCustomer() {
    const ul = document.getElementById("customer-list");
    ul.innerHTML = "";
    customersList.forEach((customer) => {
        ul.innerHTML += `<li class="list-group-item" onclick="showForm();loadClient('${customer.nip}');">${customer.getCustomerInfo()}</li>`;
    });
    showList();
}
function showForm() {
    const clientForm = document.getElementById("client-form");
    const clientList = document.getElementById("client-list");
    clientForm.style.display = "block";
    clientList.style.display = "none";
}
function showList() {
    const clientForm = document.getElementById("client-form");
    const clientList = document.getElementById("client-list");
    clientForm.style.display = "none";
    clientList.style.display = "block";
}
function save(event) {
    event.preventDefault();
    const newCustomer = new Customer();
    newCustomer.name = document.getElementById("company-name").value;
    newCustomer.nip = document.getElementById("nip").value;
    newCustomer.city = document.getElementById("city").value;
    newCustomer.street = document.getElementById("street").value;
    newCustomer.houseNumber = document.getElementById("house-number").value;
    newCustomer.zipCode = document.getElementById("zipcode").value;
    newCustomer.comments = document.getElementById("comments").value;
    newCustomer.industry = document.getElementById("industry").value;
    newCustomer.active = document.getElementById("active").checked;
    console.log(newCustomer);
    const foundCustomer = customersList.find((customer) => customer.nip === newCustomer.nip);
    if (foundCustomer) {
        // Update existing customer
        Object.assign(foundCustomer, newCustomer);
    }
    else {
        // Add new customer
        customersList.push(newCustomer);
    }
    console.log(customersList);
    showCustomer();
}
function loadClient(nip) {
    const newCustomer = customersList.find((customer) => customer.nip === nip) || new Customer();
    getElementById("company-name").value = newCustomer.name;
    getElementById("nip").value = newCustomer.nip;
    getElementById("city").value = newCustomer.city;
    getElementById("street").value = newCustomer.street;
    getElementById("house-number").value = newCustomer.houseNumber;
    getElementById("zipcode").value = newCustomer.zipCode;
    getElementById("comments").value = newCustomer.comments;
    getElementById("industry").value = newCustomer.industry;
    getElementById("active").checked = newCustomer.active;
}
function getElementById(idElement) {
    return document.getElementById(idElement);
}
