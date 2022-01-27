export class Agreements {
    
    constructor(client, supplier, deliveryAddress, billingAddress, duration, package = true) {
        this.client             = client
        this.supplier           = supplier;
        this.deliveryAddress    = deliveryAddress;
        this.billingAddress     = billingAddress;
        this.duration           = duration;
        this.package            = package
    }
}