import { Address } from "./models/address/Address.js";
import { Client } from "./models/Client.js";
import { Contract} from "./models/agreements/Agreements.js";
// import { LeaseContract } from "./models/agreements/LeaseContract.js";
import { Supplier } from "./models/Supplier.js";



let address = new Address("square Leopold", 15, 1040, "Brussels");
let client = new Client("companyX", address, "0123", "Henryyy", "CEO", "0479020890" );
let supplier = new Supplier(3, 12000, "lorem ipsum ...", "dorosit lamen ...");
let contract = new Contract(client, supplier, address, address, 3);




// let newClient = client;
window.client = client;
window.contract = contract;
// window.newClient = newClient;
