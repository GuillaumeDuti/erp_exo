# Erp exo : 

## structure : 
- Contract : 
    - Client : 
        - companyName    
        - Address :
            - street
            - number
            - postalCode
            - city
            - mailBox
        - TVAnumber      
        - signatoryName  
        - companyFunction
        - telephoneNumber
        - email
    - Supplier
        - contractLength     
        - rentalPrice        
        - materialDescription
        - equipementToChange
    - deliveryAddress
    - billingAddress
    - duration
    - pack
    - ConcludingFormulas :
        - date
        - place

- MaintenanceContract : 
    - Contract (extends)
        - Client
        - Supplier
        - ...
    - counterEmail
    - FinancialConditions :
        - maintenanceCosts
        - IWSCosts
        - priceByColorPrint
        - priceByBWPrint
    - MaintenanceAdditionalInformations :
        - description
        - managementServices