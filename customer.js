function Client() {
  this.name = "Adam";
  this.nip = 1234;
  this.city = "Mrągowo";
  this.street = "Majowa";
  this.houseNumber = 8;
  this.zipCode = 99999;
  this.comments = "1234567";
  this.industry = "Mleczarska";
  this.active = true;
  this.accountNumber = 61231949;
  this.invoices = ["123", "123123", "435345353"];
}

function Supplier(accountNumber) {
  this.accountNumber = accountNumber;
  this.invoices = [];
}

Supplier.prototype = new Customer();
