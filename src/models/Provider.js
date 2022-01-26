export class Provider {

    contractLength;     
    rentalPrice;        
    materialDescription;
    equipementToChange;
     
    constructor(contractLength, rentalPrice, materialDescription, equipementToChange) {
        this.contractLength         = contractLength;
        this.rentalPrice            = rentalPrice;
        this.materialDescription    = materialDescription;
        this.equipementToChange     = equipementToChange;
    }
}