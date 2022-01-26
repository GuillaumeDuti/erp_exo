export class Address {
    street;
    number;
    postalCode;
    city;
    constructor(street, number, postalCode, city ) {
        this.street     = street;
        this.number     = number;
        this.postalCode = postalCode;
        this.city       = city;
    }
}