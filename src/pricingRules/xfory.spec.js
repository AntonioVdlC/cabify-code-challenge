import xfory from "./xfory"

describe("xfory", () => {
    let item = {
        "item": "VOUCHER",
        "type": "xfory",
        "x": 2,
        "y": 1,
        "unitPrice": 5
    }
    let rule = xfory(item)
    
    it("should return the unit price of an item if the number of items % x is not 0", () => {
        let nbrItems = {"VOUCHER": 3}
        expect(rule(nbrItems)).toBe(item.unitPrice)
    })
    it("should return the 0 of an item if the number of items % x is 0", () => {
        let nbrItems = {"VOUCHER": 4}
        expect(rule(nbrItems)).toBe(0)
    })
})
