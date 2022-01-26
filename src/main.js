import { Address } from "./models/address/Address.js";
import { Client } from "./models/Client.js";

let address = new Address("square Leopold", 15, 1040, "Brussels")
let Henry = new Client("companyX", address, "0123", "Henryyy", "CEO", "0479020890" );
let newHenry = Henry;
window.Henry = Henry;
window.newHenry = newHenry;
