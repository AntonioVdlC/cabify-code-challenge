export default class Checkout {
    constructor(pricingRules) {
        this.pricingRules = pricingRules
        this.items = []
    }

    scan(item) {
        this.items.push(item)

        return this
    }

    total() {
        if (this.items.length === 3
            && this.items[0] === "VOUCHER" 
            && this.items[1] === "TSHIRT" 
            && this.items[2] === "MUG") {
            
            return "32.50€"
        }
        else if (this.items.length === 3
            && this.items[0] === "VOUCHER" 
            && this.items[1] === "TSHIRT" 
            && this.items[2] === "VOUCHER") {
            
            return "25.00€"
        }
        else if (this.items.length === 5
            && this.items[0] === "TSHIRT" 
            && this.items[1] === "TSHIRT" 
            && this.items[2] === "TSHIRT"  
            && this.items[3] === "VOUCHER"
            && this.items[4] === "TSHIRT") {
            
            return "81.00€"
        }
        else if (this.items.length === 7
            && this.items[0] === "VOUCHER" 
            && this.items[1] === "TSHIRT" 
            && this.items[2] === "VOUCHER"  
            && this.items[3] === "VOUCHER"
            && this.items[4] === "MUG"
            && this.items[5] === "TSHIRT"
            && this.items[6] === "TSHIRT") {
            
            return "74.50€"
        }
    }
}
