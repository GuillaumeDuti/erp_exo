import { Address } from "./models/address/Address.js";
import { Client } from "./models/Client.js";
// import { Agreements } from "./models/agreements/Agreements.js";
import { LeaseContract } from "./models/agreements/LeaseContract.js";
import { Supplier } from "./models/Supplier.js";



let address = new Address("square Leopold", 15, 1040, "Brussels");
let client = new Client("companyX", address, "0123", "Henryyy", "CEO", "0479020890" );
let supplier = new Supplier(3, 12000, "lorem ipsum ...", "dorosit lamen ...");
let contract = new LeaseContract(client, supplier, address, address, 3);

const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     fetch("http://localhost:3005/directory", {
//         method: "post",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(contract) 
//     })
//     // .then(function(response){
//     //     if(response.ok) {
//     //         response.json().then(function(data){
//     //             console.log(data)
//     //         })
//     //     }
//     // })
// })


window.address =address;
window.client = client;
window.contract = contract;


