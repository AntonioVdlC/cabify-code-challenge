export default class Checkout {
    constructor(pricingRules) {
        this.pricingRules = pricingRules
        this.items = []
    }

    scan(item) {
        let rule = this.pricingRules[item]

        if (rule) {
            this.items.push({
                code: item,
                price: rule(this.items) 
            })
        } else {
            throw new Error("The item you are trying to scan does not exist.")
        }

        return this
    }

    total() {
        let total = this.items
            .reduce((total, item) => total + item.price, 0)
            .toFixed(2) + "€" // Number.toLocaleString is broken in Chrome

        return total
    }
}
