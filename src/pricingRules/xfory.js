const xfory = ({item, x, y, unitPrice}) => (nbrItems) => {
    let nbr = nbrItems[item]
        
    if (nbr % x === 0) {
        return unitPrice - (unitPrice * (x - y))
    } else {
        return unitPrice
    }
} 

export default xfory
