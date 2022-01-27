import { Agreements } from "./Agreements.js";

export class LeaseContract extends Agreements {

    // mettre ce qui se différencie d'un contract normal

    constructor() {
        super(this.client, this.supplier, this.deliveryAddress, this.billingAddress, this.duration);
    }

}