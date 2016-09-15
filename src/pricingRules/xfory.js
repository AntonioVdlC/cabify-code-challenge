const xfory = ({item, x, y, unitPrice}) => (items) => {
    let nbr = items
        .filter(i => i.code === item)
        .length + 1
        
    if (nbr % x !== y) {
        return 0
    } else {
        return unitPrice
    }
} 

export default xfory
