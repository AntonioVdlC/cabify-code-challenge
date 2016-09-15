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
        let items = [{code:"VOUCHER"},{code:"VOUCHER"}]
        expect(rule(items)).toBe(item.unitPrice)
    })
    it("should return the 0 of an item if the number of items % x is 0", () => {
        let items = [{code:"VOUCHER"},{code:"VOUCHER"},{code:"VOUCHER"}]
        expect(rule(items)).toBe(0)
    })
})
