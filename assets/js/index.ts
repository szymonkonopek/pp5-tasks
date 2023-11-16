class Index {
  name: string = "";
  nip: string = "";
  city: string = "";
  street: string = "";
  houseNumber: string = "";
  zipCode: string = "";
  comments: string = "";
  industry: string = "";
  active: boolean = false;

  getCustomerInfo(): string {
    return `${this.name} - ${this.nip}`;
  }
}

const customersList: Customer[] = [];

function showCustomer() {
  const ul = document.getElementById("customer-list") as HTMLUListElement;
  ul.innerHTML = "";
  customersList.forEach((customer) => {
    ul.innerHTML += `<li class="list-group-item" onclick="showForm();loadClient('${
      customer.nip
    }');">${customer.getCustomerInfo()}</li>`;
  });
  showList();
}

function showForm() {
  const clientForm = document.getElementById("client-form") as HTMLElement;
  const clientList = document.getElementById("client-list") as HTMLElement;
  clientForm.style.display = "block";
  clientList.style.display = "none";
}

function showList() {
  const clientForm = document.getElementById("client-form") as HTMLElement;
  const clientList = document.getElementById("client-list") as HTMLElement;
  clientForm.style.display = "none";
  clientList.style.display = "block";
}

function save(event: Event) {
  event.preventDefault();
  const newCustomer = new Customer();
  newCustomer.name = (
    document.getElementById("company-name") as HTMLInputElement
  ).value;
  newCustomer.nip = (document.getElementById("nip") as HTMLInputElement).value;
  newCustomer.city = (
    document.getElementById("city") as HTMLInputElement
  ).value;
  newCustomer.street = (
    document.getElementById("street") as HTMLInputElement
  ).value;
  newCustomer.houseNumber = (
    document.getElementById("house-number") as HTMLInputElement
  ).value;
  newCustomer.zipCode = (
    document.getElementById("zipcode") as HTMLInputElement
  ).value;
  newCustomer.comments = (
    document.getElementById("comments") as HTMLInputElement
  ).value;
  newCustomer.industry = (
    document.getElementById("industry") as HTMLInputElement
  ).value;
  newCustomer.active = (
    document.getElementById("active") as HTMLInputElement
  ).checked;

  console.log(newCustomer);

  const foundCustomer = customersList.find(
    (customer) => customer.nip === newCustomer.nip
  );
  if (foundCustomer) {
    // Update existing customer
    Object.assign(foundCustomer, newCustomer);
  } else {
    // Add new customer
    customersList.push(newCustomer);
  }

  console.log(customersList);
  showCustomer();
}

function loadClient(nip: string) {
  const newCustomer =
    customersList.find((customer) => customer.nip === nip) || new Customer();

  getElementById("company-name").value = newCustomer.name;
  getElementById("nip")!.value = newCustomer.nip;
  getElementById("city")!.value = newCustomer.city;
  getElementById("street")!.value = newCustomer.street;
  getElementById("house-number")!.value = newCustomer.houseNumber;
  getElementById("zipcode")!.value = newCustomer.zipCode;
  getElementById("comments")!.value = newCustomer.comments;
  getElementById("industry")!.value = newCustomer.industry;
  getElementById("active").checked = newCustomer.active;
}

function getElementById(idElement: string): HTMLInputElement {
  return document.getElementById(idElement) as HTMLInputElement;
}
