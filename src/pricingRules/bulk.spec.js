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
        let nbrItems = {"TSHIRT": 1}
        expect(rule(nbrItems)).toBe(item.unitPrice)
    })

    it("should return the unit price minus the average difference times the bulk number if the number of items is exactly the bulk number", () => {
        let nbrItems = {"TSHIRT": 3}
        expect(rule(nbrItems)).toBe(item.unitPrice - (item.unitPrice - item.bulkPrice) * item.bulkNumber)
    })

    it("should return the bulk price if the number of items is above the bulk number", () => {
        let nbrItems = {"TSHIRT": 4}
        expect(rule(nbrItems)).toBe(item.bulkPrice)
    })
})
