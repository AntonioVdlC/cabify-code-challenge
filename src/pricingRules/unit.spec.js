import unit from "./unit"

describe("unit", () => {
    let item = {
        "item": "MUG",
        "type": "unit",
        "unitPrice": 7.5
    }
    let rule = unit(item)
    
    it("should return the unit price of an item", () => {
        expect(rule()).toBe(item.unitPrice)
    })
})
