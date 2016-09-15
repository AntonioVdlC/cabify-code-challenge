import bulk from "./bulk"
import unit from "./unit"
import xfory from "./xfory"

const rules = {
    "bulk": bulk,
    "unit": unit,
    "xfory": xfory
}

const applyRules = (pricingRules) => {
    return pricingRules.map(rule => {
        return {
            item: rule.item,
            rule: (rules[rule.type]) ? 
                rules[rule.type](rule) : 
                rules["unit"](rule)
        }
    })
}

export { rules, applyRules }
