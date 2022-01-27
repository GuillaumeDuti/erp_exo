export class Address {
    street;
    number;
    postalCode;
    city;
    mailBox;

    constructor(street, number, mailBox = undefined , postalCode, city ) {
        this.street     = street;
        this.number     = number;
        this.mailBox    = mailBox;
        this.postalCode = postalCode;
        this.city       = city;
    }
}