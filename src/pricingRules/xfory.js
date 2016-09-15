const xfory = ({item, x, y, unitPrice}) => (items) => {
    let nbr = items
        .filter(i => i.code === item)
        .length + 1
        
    if (nbr % x === 0) {
        return unitPrice - (unitPrice * (x - y))
    } else {
        return unitPrice
    }
} 

export default xfory
