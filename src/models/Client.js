export class Client {
    
    companyName;    
    address;        
    TVAnumber;      
    signatoryName;  
    companyFunction;
    telephoneNumber;

    constructor(companyName, address, TVAnumber, signatoryName, companyFunction, telephoneNumber) {
        this.companyName        = companyName;
        this.address            = address;
        this.TVAnumber          = TVAnumber;
        this.signatoryName      = signatoryName;
        this.companyFunction    = companyFunction;
        this.telephoneNumber    = telephoneNumber;
    }
}