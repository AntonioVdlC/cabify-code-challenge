# Cabify Coding Exercise
This is my implementation of a checkout process based on the requirements provided.

## Installation
To use this code, you will first need to clone the repository.

```
git init
git clone git@github:AntonioVdlC/cabify-coding-exercise.git
```

You will then need to install the npm dependencies (if you don't have Node installed, you may want to grab that first!).

```
npm install
```

Congrats! You are ready to go!

> If you want to generate a production-ready transpiled and minified build, run `npm run build`.

## Usage
This module exposes a `Checkout` class with two public methods: `scan` and `total`.
To create a new `Checkout` object, you will need to pass it a `pricingRules` object defining the different prices and rules for your items.

```
let co = new Checkout(pricingRules)
```

### Pricing Rules
The pricing rules are defined as an object, with the item's codes as key and a function that accepts the current list of items as parameter and that returns a number as value.

```
const pricingRules = {
    "VOUCHER": (items) => {
        let nbrVouchers = items
            .filter(i => i.code === "VOUCHER")
            .length + 1

        if (nbrVouchers % 2 !== 1) {
            return 0
        } else {
            return 5
        }
    },
    "TSHIRT": (items) => {
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
    },
    "MUG": () => 7.5
}
```

This allows for very flexible pricing rules, but requires manual changes in the code anytime a pricing rule needs to be changed.

### Scan
You can add as many items as wanted to the `checkout` object using the `scan` method. The `scan` method is chainable and accepts an item's code (defined in the pricing rules).

```
co.scan("VOUCHER").scan("TSHIRT).scan("MUG")
```

> If you scan an item that has not been previously defined, the `scan` method will throw an error.

### Total
The `total` method simply returns the total price of all the scanned items in currency format `O.OO€`

```
co.total() // 32.50€ (for example!)
```

## Tests
To run the tests once, simply run `npm run test`.

For development work, it is recommended to use some flavour of TDD. To do so, you can watch the tests as you write some code using `npm run test:watch`.

Finally, if you want to generate a coverage report, you can run `npm run test:coverage`.

> There is no linting as of now, because I assume coding styles are not part of the coding exercise!

## Licence
MIT
