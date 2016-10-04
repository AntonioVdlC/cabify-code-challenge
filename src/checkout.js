import { applyRules } from "./pricingRules"

export default class Checkout {
    constructor(pricingRules) {
        this.pricingRules = applyRules(pricingRules)
        this.items = []
        this.nbrItems = {}
    }

    scan(item) {
        if (!this.pricingRules.some(rule => rule.item === item)) {
            throw new Error("The item you are trying to scan does not exist.")
        }

        let rule = this.pricingRules
            .find(rule => rule.item === item)
            .rule

        // Optimistically updating the number of items
        if (this.nbrItems[item]) {
            this.nbrItems[item] ++
        } else {
            this.nbrItems[item] = 1
        }

        try {
            // Add the item to the checkout list
            this.items.push({
                code: item,
                price: rule(this.nbrItems) 
            })
        } catch(error) {
            // If something goes wrong, update the number of items
            this.nbrItems --

            throw error
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
