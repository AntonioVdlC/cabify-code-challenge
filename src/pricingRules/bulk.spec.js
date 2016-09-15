import bulk from "./bulk"

describe("bulk", () => {
    let item = {
        "item": "TSHIRT",
        "type": "bulk",
        "bulkNumber": 3,
        "bulkPrice": 19,
        "unitPrice": 20
    }
    let rule = bulk(item)
    
    it("should return the unit price of an item if the number of items is below the bulk number", () => {
        let items = [{code:"TSHIRT"}]
        expect(rule(items)).toBe(item.unitPrice)
    })

    it("should return the unit price minus the average difference times the bulk number if the number of items is exactly the bulk number", () => {
        let items = [{code:"TSHIRT"},{code:"TSHIRT"}]
        expect(rule(items)).toBe(item.unitPrice - (item.unitPrice - item.bulkPrice) * item.bulkNumber)
    })

    it("should return the bulk price if the number of items is above the bulk number", () => {
        let items = [{code:"TSHIRT"},{code:"TSHIRT"},{code:"TSHIRT"}]
        expect(rule(items)).toBe(item.bulkPrice)
    })
})
