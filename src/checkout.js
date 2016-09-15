import { applyRules } from "./pricingRules"

export default class Checkout {
    constructor(pricingRules) {
        this.pricingRules = applyRules(pricingRules)
        this.items = []
    }

    scan(item) {
        if (!this.pricingRules.some(rule => rule.item === item)) {
            throw new Error("The item you are trying to scan does not exist.")
        }

        let rule = this.pricingRules
            .find(rule => rule.item === item)
            .rule

        this.items.push({
            code: item,
            price: rule(this.items) 
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
