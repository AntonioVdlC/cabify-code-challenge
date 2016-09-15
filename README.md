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
The pricing rules are defined as an array (serializable into JSON), with the item's code, the item's unit price, the item's pricing rule and any other field that applies to that given rule.

```
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
```

This array is then passed to the `Checkout` constructor and transformed into functions using `applyRules` so that the rules can be easily applied to the several scanned items.

Each type of pricing rule is implemented as a higher-order function in the `pricingRules/` folder. Adding new kinds of pricing rules is as easy as adding a new rule implementation in that folder and referencing it in `pricingRules/index.js`.

This approach allows for some autonomy on the marketing side, as they can easily update the pricing rules applied to the items without needing specific development. Ideally, the `pricingRules` array is generated on the sever and served as JSON through an API.

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

## Limitations
Even though the current solution complies with all the requirements, there are still a few limitations:

- Pricing Rules Validation

    The pricing rules validation is very limited, as I assumed that would be done ideally on the server when generating the `pricingRules` JSON.

- Items Individual Prices

    With the current implementation, the total of a `checkout` is always correct (respecting the pricing rules). Unfortunately, that comes at the price of incorrect individual prices for the items. For example, the calculated price for the 3rd "TSHIRT" item would be 17€ instead of 19€ because the first 2 "TSHIRTS" have been saved as having a 20€-pricetag.
    
    To make sure all the individual prices are correct, we would need a different approach, where instead of calculating the price of the scanned item depending on the list of items already checked, we would need to to calculate the price of all the items already checked depending on the last item scanned.
    
    Nevertheless, that implementation would be (slightly) less performant than the current as it would require the creation and calculation of a new array for each item scanned, whereas the actual implementation just calculates the price of the current scanned item. Besides, there are no public methods to access the internals of the `checkout` object, so I guess that should be ok!


## Licence
MIT
