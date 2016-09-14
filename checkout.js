export default class Checkout {
    constructor(pricingRules) {
        this.pricingRules = pricingRules
        this.items = []
    }

    scan(item) {
        this.items.push({
            code: item,
            price: ((items, item) => {
                if (item === "VOUCHER") {
                    let nbrVouchers = items
                        .filter(i => i.code === "VOUCHER")
                        .length + 1

                    if (nbrVouchers % 2 !== 1) {
                        return 0
                    } else {
                        return 5
                    }
                } else if (item === "TSHIRT") {
                    let nbrTshirts = items
                        .filter(i => i.code === "TSHIRT")
                        .length + 1
                    
                    if (nbrTshirts === 3) {
                        return 17
                    } else if (nbrTshirts > 3) { 
                        return 19
                    } else {
                        return 20
                    }
                } else if (item === "MUG") { 
                    return 7.5
                }
            })(this.items, item)
        })

        return this
    }

    total() {
        let total = this.items
            .reduce((total, item) => total + item.price, 0)
            .toFixed(2) + "€" // Number.toLocaleString is broken in Chrome

        return total
    }
}
