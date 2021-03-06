import Checkout from "./checkout"

describe("Checkout", () => {
    let co
    const pricingRules = [
        {
            "item": "VOUCHER",
            "type": "xfory",
            "x": 2,
            "y": 1,
            "unitPrice": 5
        },{
            "item": "TSHIRT",
            "type": "bulk",
            "bulkNumber": 3,
            "bulkPrice": 19,
            "unitPrice": 20
        },{
            "item": "MUG",
            "type": "unit",
            "unitPrice": 7.5
        }
    ]

    beforeEach(() => {
        co = new Checkout(pricingRules)
    })

    // new Checkout
    it("should create a new object when called with `new`", () => {
        expect(typeof co).toBe("object")
    })

    // Public Methods
    it("should expose a .scan() method", () => {
        expect(typeof co.scan).toBe("function")
    })
    describe(".scan()", () => {
        it("should be chainable", () => {
            expect(co.scan("VOUCHER")).toBe(co)
        })
        it("should throw an error when passed an invalid item", () => {
            expect(() => co.scan()).toThrow()
        })
    })

    it("should expose a .total() method", () => {
        expect(typeof co.total).toBe("function")
    })
    describe(".total()", () => {
        it("should return a string", () => {
            expect(typeof co.total()).toBe("string")
        })
        it("should return a string in currency format (€)", () => {
            expect(co.total()).toMatch(/^(0|[1-9][0-9]?)[.][0-9]{2}€$/)
        })
    })

    // Examples
    describe("Examples", () => {
        it("should return 32.50€ when scanning VOUCHER, TSHIRT, MUG", () => {
            co
                .scan("VOUCHER")
                .scan("TSHIRT")
                .scan("MUG")

            expect(co.total()).toBe("32.50€")
        })
        it("should return 25.00€ when scanning VOUCHER, TSHIRT, VOUCHER", () => {
            co
                .scan("VOUCHER")
                .scan("TSHIRT")
                .scan("VOUCHER")

            expect(co.total()).toBe("25.00€")
        })
        it("should return 81.00€ when scanning TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT", () => {
            co
                .scan("TSHIRT")
                .scan("TSHIRT")
                .scan("TSHIRT")
                .scan("VOUCHER")
                .scan("TSHIRT")

            expect(co.total()).toBe("81.00€")
        })
        it("should return 74.50€ when scanning VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT", () => {
            co
                .scan("VOUCHER")
                .scan("TSHIRT")
                .scan("VOUCHER")
                .scan("VOUCHER")
                .scan("MUG")
                .scan("TSHIRT")
                .scan("TSHIRT")

            expect(co.total()).toBe("74.50€")
        })
    })
})
